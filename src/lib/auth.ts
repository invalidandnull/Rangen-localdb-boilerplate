import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db, getUserCredit } from "@/lib/db";
import { account, session, subscription, user, verification } from "./auth-schema";
import { stripe } from "@better-auth/stripe"
import Stripe from "stripe"
import { eq } from "drizzle-orm";
import { customSession } from "better-auth/plugins";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 24 * 3, // 3 days
    }
  },
  user: {
    additionalFields: {
      credit: {
        type: "number",
        defaultValue: 200,
      }
    }
  },
  plugins: [
    customSession(async ({ user, session }) => {
      const credit = await getUserCredit(user.id);
      return {
        user: {
          ...user,
          credit,
        },
        ...session
      };
    }),
    stripe({
      stripeClient: new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: "2025-10-29.clover",
      }),
      stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
      createCustomerOnSignUp: true,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onCustomerCreate: async ({ stripeCustomer, user }, request) => {
        // Do something with the newly created customer
        //   console.log(`Customer ${customer.id} created for user ${user.id}`);
      },
      subscription: {
        enabled: true,
        plans: [
          {
            name: "pro", // the name of the plan, it'll be automatically lower cased when stored in the database
            priceId: process.env.STRIPE_PRICE_ID_PRO, // the price id from stripe
          },
          {
            name: "advanced",
            priceId: process.env.STRIPE_PRICE_ID_ADVANCED,
          }
        ],
        onSubscriptionComplete: async ({ subscription }) => {
          if (subscription.plan === "pro") {
            await db.update(user).set({
              credit: 2000,
            }).where(eq(user.id, subscription.referenceId));
          } else if (subscription.plan === "advanced") {
            await db.update(user).set({
              credit: 5000,
            }).where(eq(user.id, subscription.referenceId));
          }
        }
      }
    }),
  ],
  database: drizzleAdapter(db, {
    provider: "sqlite", // or "mysql", "sqlite"
    schema: {
      user: user,
      session: session,
      account: account,
      verification: verification,
      subscription: subscription
    }
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      redirectURI: process.env.NEXT_PUBLIC_APP_URL + "/api/auth/callback/google",
    }
  },
});