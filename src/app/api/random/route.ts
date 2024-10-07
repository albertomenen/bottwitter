import { generateRandomTweet } from "../../../tweet/generateTweet.ts";

export async function POST() {
  await generateRandomTweet();
  return new Response("Tweet generado con AI enviado", { status: 200 });
}
