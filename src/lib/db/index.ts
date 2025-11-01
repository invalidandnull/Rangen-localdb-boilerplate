import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from '../auth-schema'
import { eq } from 'drizzle-orm';

const client = createClient({
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, { schema });

export async function updateUserCredit(userId: string, credit: number) {
    await db.update(schema.user).set({
        credit: credit,
    }).where(eq(schema.user.id, userId));
}

export async function getUserCredit(userId: string) {
    const user = await db.select().from(schema.user).where(eq(schema.user.id, userId));
    return user[0].credit;
}

export async function getUserPlanByCustomerId(customerId: string) {
    const subscription = await db.select().from(schema.subscription).where(eq(schema.subscription.stripeCustomerId, customerId));
    return subscription[0].plan;
}

export async function getUserPlanByUserId(userId: string) {
    const subscription = await db.select().from(schema.subscription).where(eq(schema.subscription.referenceId, userId));
    if (subscription.length === 0) {
        return "free";
    }
    return subscription[0].plan;
}



