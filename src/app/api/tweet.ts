// src/app/api/tweet.ts
import { twitterClient } from "../../lib/twitter.js";
import OpenAI from 'openai';

// Configurar OpenAI usando la nueva sintaxis
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Obtener la clave desde las variables de entorno
});

// Función para generar contenido de tweet con ChatGPT
const generateTweetWithChatGPT = async (prompt: string): Promise<string> => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // O usa "gpt-4" si tienes acceso
      messages: [{ role: "user", content: prompt }],
      max_tokens: 50, // Número máximo de tokens (palabras)
    });

    const choice = response.choices?.[0];
    const tweetContent = choice?.message?.content?.trim();
    if (!tweetContent) throw new Error("No se pudo generar un tweet.");

    return tweetContent;
  } catch (error) {
    console.error("Error al generar el tweet con ChatGPT:", error);
    throw error;
  }
};

// Tweet aleatorio generado automáticamente por ChatGPT
export const generateRandomTweet = async () => {
  const prompt = "Genera un tweet sobre alguna curiosidad de ciberseguridad que haya pasado en las noticias actuales, basate en los datos mas actuales.";

  try {
    const tweetContent = await generateTweetWithChatGPT(prompt);
    const response = await twitterClient.v2.tweet(tweetContent);
    console.log("Tweet publicado:", response);
  } catch (error) {
    console.error("Error al publicar el tweet:", error);
  }
};

// Tweet "GM" cada mañana
export const postGMTweet = async () => {
  const gmPrompt = "Escribe un tweet amistoso para dar los buenos días con energía positiva.";

  try {
    const gmTweet = await generateTweetWithChatGPT(gmPrompt);
    const response = await twitterClient.v2.tweet(gmTweet);
    console.log("GM Tweet publicado:", response);
  } catch (error) {
    console.error("Error al publicar el tweet:", error);
  }
};
