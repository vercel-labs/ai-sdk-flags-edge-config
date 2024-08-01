import { createOpenAI } from "@ai-sdk/openai";
import { experimental_createProviderRegistry as createProviderRegistry } from "ai";
import { get } from "@vercel/edge-config";
import { generateText } from "ai";
import dotenv from "dotenv";

dotenv.config();

export const registry = createProviderRegistry({
  // register provider with prefix and custom setup:
  groq: createOpenAI({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.GROQ_API_KEY,
  }),
  openai: createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  }),
});

async function main() {
  const { text } = await generateText({
    model: registry.languageModel((await get("model_id")) as string),
    prompt: "Invent a new holiday and describe its traditions.",
  });
  console.log(text);
}

main();
