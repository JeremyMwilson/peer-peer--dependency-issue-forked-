import { ClerkProviderProps } from "@clerk/clerk-react";

declare module "@clerk/clerk-react" {
  interface ClerkProviderProps {
    publishableKey: string;
  }
}