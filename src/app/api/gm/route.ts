// src/app/api/gm.ts
import { postGMTweet } from "../../../tweet/gmTweet.ts";

export async function POST() {
  await postGMTweet();
  return new Response("GM Tweet enviado", { status: 200 });
}
