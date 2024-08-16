import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// disable production demo app by default
export const disableApp = process.env.NEXT_PUBLIC_DISABLE_APP
  ? Boolean(process.env.NEXT_PUBLIC_DISABLE_APP)
  : false;
