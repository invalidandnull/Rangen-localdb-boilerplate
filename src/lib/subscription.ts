import { authClient } from '@/lib/auth-client';

export const handleUpgradeToPro = async () => {
    await authClient.subscription.upgrade({
      plan: "pro",
      successUrl: "/",
      cancelUrl: "/"
    });
};

export const handleUpgradeToAdvanced = async () => {
    await authClient.subscription.upgrade({
      plan: "advanced",
      successUrl: "/",
      cancelUrl: "/"
    });
};