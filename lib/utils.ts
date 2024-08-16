import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const disableApp = process.env.VERCEL_URL === "https://dynamic-model-ai-sdk.vercel.app" ?? false;