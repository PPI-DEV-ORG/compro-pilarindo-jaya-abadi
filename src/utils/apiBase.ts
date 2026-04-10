/**
 * Returns the base API URL.
 * - Development : http://localhost:4321
 * - Production  : import.meta.env.PUBLIC_API_SERVER (set in .env)
 */
export function getApiBase(): string {
  if (import.meta.env.DEV) {
    return "http://localhost:4321";
  }
  const server = import.meta.env.PUBLIC_API_SERVER;
  if (!server) {
    throw new Error(
      "[getApiBase] PUBLIC_API_SERVER is not defined. " +
        "Add it to your .env file: PUBLIC_API_SERVER=https://your-api.com",
    );
  }
  return server.replace(/\/$/, ""); // strip trailing slash
}
