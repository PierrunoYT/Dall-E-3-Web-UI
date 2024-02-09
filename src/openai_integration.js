import OpenAI from "openai";
import 'dotenv/config';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generatePrompts(idea = '') {
  const promptMessage = idea ? { role: "user", content: idea } : { role: "system", content: "Generate a creative and unique prompt." };
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Act as a DALL-E 3 prompt generator." }, promptMessage],
    model: "gpt-4-0125-preview",
    max_tokens: 150,
    n: 5,
    stop: ["\n"],
  });

  return completion.choices.map(choice => choice.message.content.trim());
}
