import { ErrorCode } from "./codes.ts";

/**
 * HTTP Error Class With Status Pair
 */
export class HttpError extends Error {
  readonly status: number;
  readonly phrase: string;

  /**
   * @param error HTTP Error Code/Phrase
   * @param message HTTP Error Cause/Details
   */
  constructor(error: ErrorCode | keyof typeof ErrorCode, message: string) {
    const status = typeof error === "number" ? error : ErrorCode[error];
    const phrase = typeof error === "number" ? ErrorCode[error] : error;

    super(`${status} ${phrase}: ${message}`);

    this.status = status;
    this.phrase = phrase;
  }
}
