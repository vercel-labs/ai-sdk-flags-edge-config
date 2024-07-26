import { createOpenAI } from "@ai-sdk/openai";
import { experimental_createProviderRegistry as createProviderRegistry } from "ai";
import { unstable_flag as flag } from "@vercel/flags/next";
import { get } from "@vercel/edge-config";

export const registry = createProviderRegistry({
  groq: createOpenAI({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.GROQ_API_KEY,
  }),
  openai: createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  }),
});

export const modelId = flag({
  key: "model_id",
  async decide() {
    const value = await get(this.key);
    return value ?? "openai:gpt-4o";
  },
});
