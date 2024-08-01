import { get } from "@vercel/edge-config";
import { unstable_flag as flag } from "@vercel/flags/next";

export const modelId = flag({
  key: "model_id",
  async decide() {
    const value = await get(this.key);
    return value ?? "openai:gpt-4o";
  },
});