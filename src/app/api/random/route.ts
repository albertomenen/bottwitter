import { generateRandomTweet } from "../../../tweet/generateTweet.ts";

export async function POST() {
  await generateRandomTweet();
  return new Response("Tweet aleatorio enviado", { status: 200 });
}
