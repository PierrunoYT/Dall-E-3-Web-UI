import { config } from 'dotenv';
config();
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function generateImage(prompt, size = '1024x1024') {
  const validSizes = ['1024x1024', '1792x1024', '1024x1792'];
if (!validSizes.includes(size)) {
  throw new Error(`Invalid image size. Valid sizes are: ${validSizes.join(', ')}.`);
}
const image = await openai.images.generate({ model: "dall-e-3", prompt: prompt, n: 1, size: size });
  return image;
}
