export const DEMO_EMAIL = "demo@nexwork.id";
export const DEMO_PASSWORD = "nexwork2045";
export const AUTH_STORAGE_KEY = "nexwork-demo-auth";

export function isDemoCredential(email: string, password: string) {
  return (
    email.trim().toLowerCase() === DEMO_EMAIL &&
    password === DEMO_PASSWORD
  );
}
