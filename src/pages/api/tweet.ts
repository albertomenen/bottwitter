import { NextApiRequest, NextApiResponse } from 'next';
import { rwClient } from '../../server/twitter';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const tweetText = req.body.text || "¡Hola, este es un tweet automático!";
    
    const tweetResponse = await rwClient.v2.tweet(tweetText);
    res.status(200).json({ success: true, data: tweetResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
}
