export {};

declare global {
  interface Window {
    Stripe: any;
    elements: any;
    isAuthenticated: boolean;
  }
}