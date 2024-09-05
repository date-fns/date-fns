/**
 * @name handleZero
 * @category Utility Helpers
 * @summary Ensure zero is always returned as positive zero.
 *
 * @description
 * This function checks if the input number is zero and ensures that it returns +0
 * instead of -0. This is useful when dealing with rounding or truncation where
 * negative zero can occur.
 *
 * @param weeks - The number to check for zero
 *
 * @returns The input number, ensuring +0 instead of -0
 *
 * @example
 * // Ensure positive zero:
 * const result = handleZero(-0)
 * //=> 0
 *
 * @example
 * // Return the original value if non-zero:
 * const result = handleZero(2)
 * //=> 2
 */
export function handleZero(weeks: number): number {
  return weeks === 0 ? 0 : weeks;
}