import { twitterClient } from "../lib/twitter.ts";

export const postGMTweet = async () => {
  const gmTweet = "GM! 🌅 Espero que tengas un gran día.";

  try {
    const response = await twitterClient.v2.tweet(gmTweet);
    console.log("GM Tweet publicado:", response);
  } catch (error) {
    console.error("Error al publicar el tweet:", error);
  }
};
