// src/app/api/tweet.ts
import { twitterClient } from "../../lib/twitter.js";

// Tweet aleatorio generado
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

// Tweet "GM" cada mañana
export const postGMTweet = async () => {
  const gmTweet = "GM! 🌅 Espero que tengas un gran día.";

  try {
    const response = await twitterClient.v2.tweet(gmTweet);
    console.log("GM Tweet publicado:", response);
  } catch (error) {
    console.error("Error al publicar el tweet:", error);
  }
};
