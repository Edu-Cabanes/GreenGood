import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge Tailwind classes efficiently.
 * Following tailwind-4 skill guidelines.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
