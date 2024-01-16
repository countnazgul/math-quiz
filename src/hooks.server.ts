import { auth } from "$lib/server/lucia";
import { error, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  // we can pass `event` because we used the SvelteKit middleware
  event.locals.auth = auth.handleRequest(event);

  if (event.url.pathname.startsWith("/api")) {
    const session = await event.locals.auth.validate();
    if (!session) throw error(401, "Not logged in");
  }

  if (event.url.pathname == "/") {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/app",
      },
    });
  }

  return await resolve(event);
};
