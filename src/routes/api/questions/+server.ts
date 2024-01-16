import { json } from "@sveltejs/kit";
import { generateQuestions } from "$lib";

export async function GET(event) {
  return new Response("Hello Blah");
}

export async function POST(event) {
  const body: { age: number; area: string; numberOfQuestions?: number } =
    await event.request.json();

  const questions = await generateQuestions(
    body.age,
    body.area,
    body.numberOfQuestions
  );

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return json(questions);
}
