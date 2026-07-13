import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Assuming there's a function responsible for exporting video dimensions
function roundToEven(number) {
  return Math.round(number / 2) * 2;
}

export function exportVideoDimensions(width, height) {
  const roundedWidth = roundToEven(width);
  const roundedHeight = roundToEven(height);
  
  // Existing export functionality with rounded dimensions
  // exportVideo(roundedWidth, roundedHeight);
}