/**
 * Mock mode utilities.
 * Mock mode is active when NEXT_PUBLIC_MOCK_DATA is set to "true" or "1",
 * OR when running in development (defaults to on).
 */

export function isMockMode(): boolean {
  const flag = process.env.NEXT_PUBLIC_MOCK_DATA;
  // Explicitly enabled
  if (flag === "true" || flag === "1") return true;
  // Explicitly disabled
  if (flag === "false" || flag === "0") return false;
  // Default: on in dev, off otherwise
  return process.env.NODE_ENV === "development";
}
