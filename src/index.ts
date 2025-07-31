import type { ErrorCode } from "./codes.ts";
export { ErrorCode } from "./codes.ts";
import { HttpError } from "./error.ts";
export { HttpError } from "./error.ts";

/**
 * Get HTTP Error With Tagged Templates
 * @param error HTTP Error Code/Phrase
 * @returns Tag Function For HTTP Error
 */
export function raise(
  error: ErrorCode | keyof typeof ErrorCode,
): (...template: Parameters<typeof String.raw>) => HttpError {
  return (...template) => new HttpError(error, String.raw(...template));
}
