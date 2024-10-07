import { twitterClient } from "../lib/twitter.ts";
import { OpenAI } from "openai";

// Configurar OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Asegúrate de tener esta variable en tu archivo .env
});

export const generateRandomTweet = async () => {
  const prompt = "Genera un tweet sobre el futuro de la inteligencia artificial en menos de 280 caracteres.";

  try {
    // Genera el contenido del tweet usando OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const tweetContent = response.choices?.[0]?.message?.content?.trim();
    
    if (!tweetContent) throw new Error("No se pudo generar un tweet con OpenAI.");

    // Publica el tweet en Twitter
    const twitterResponse = await twitterClient.v2.tweet(tweetContent);
    console.log("Tweet publicado:", twitterResponse);

  } catch (error) {
    console.error("Error al publicar el tweet:", error);
  }
};
