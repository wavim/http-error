import type { ErrorCode } from "./codes.ts";
import { HttpError } from "./error.ts";

/**
 * HTTP Error With Tagged Templates
 * @param error HTTP Error Code/Phrase
 * @returns HTTP Error Tag Function
 */
export function raise(
  error: ErrorCode | keyof typeof ErrorCode,
): (...template: Parameters<typeof String.raw>) => HttpError {
  return (...template) => new HttpError(error, String.raw(...template));
}
