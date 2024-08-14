import { get } from "@vercel/edge-config";
import { unstable_flag as flag } from "@vercel/flags/next";

export const modelId = flag<string>({
  key: "model_id",
  options: [
    { label: "gpt-4o", value: "openai:gpt-4o" },
    { label: "llama 3.1 8b", value: "groq:llama-3.1-8b-instant" },
  ],
  async decide() {
    const value = (await get(this.key)) as string;
    return value ?? "openai:gpt-4o";
  },
});

