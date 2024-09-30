import { twitterClient } from "../lib/twitter.ts";

export const generateRandomTweet = async () => {
  const tweetContent =
    "Este es un tweet automatizado usando T3 Stack y la API de Twitter.";

  try {
    const response = await twitterClient.v2.tweet(tweetContent);
    console.log("Tweet publicado:", response);
  } catch (error) {
    console.error("Error al publicar el tweet:", error);
  }
};
