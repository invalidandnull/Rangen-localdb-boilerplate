import { createAuthClient } from "better-auth/react"
import { stripeClient } from "@better-auth/stripe/client"
import { customSessionClient } from "better-auth/client/plugins";
import { auth } from "./auth";
import { lastLoginMethodClient } from "better-auth/client/plugins"

export const authClient = createAuthClient({
  plugins: [
    stripeClient({
        subscription: true //if you want to enable subscription management
    }),
    customSessionClient<typeof auth>(),
    lastLoginMethodClient() 
  ],
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
})

export const {
  signIn,
  signOut,
  signUp,
  useSession
} = authClient;