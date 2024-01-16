import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";
import { GITHUB_USER_NAME } from "$env/static/private";

import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = async ({ locals, fetch }) => {
  const session = await locals.auth.validate();
  if (!session) throw redirect(302, "/login");

  if (session.user.githubUsername != `${GITHUB_USER_NAME}`) {
    await auth.invalidateSession(session.sessionId); // invalidate session
    locals.auth.setSession(null); // remove cookie
    throw redirect(302, "/login");
  }

  const apiCall: { question: string; answer: string }[] = await fetch(
    "/api/questions",
    {
      method: "POST",
    }
  ).then((res) => res.json());
  return { ...apiCall };
};

export const actions: Actions = {
  logout: async ({ locals }) => {
    const session = await locals.auth.validate();
    if (!session) return fail(401);
    await auth.invalidateSession(session.sessionId); // invalidate session
    locals.auth.setSession(null); // remove cookie
    throw redirect(302, "/login"); // redirect to login page
  },
};
