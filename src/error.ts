import { ErrorCode } from "./codes.ts";

/**
 * HTTP Error Class
 */
export class HttpError extends Error {
  /**
   * HTTP Error Status Code
   */
  readonly status: number;
  /**
   * HTTP Error Code Phrase
   */
  readonly phrase: string;

  /**
   * @param error HTTP Error Code/Phrase
   * @param message HTTP Error Details
   */
  constructor(error: ErrorCode | keyof typeof ErrorCode, message: string) {
    super(message);

    this.status = typeof error === "number" ? error : ErrorCode[error];
    this.phrase = typeof error === "number" ? ErrorCode[error] : error;
  }
}
