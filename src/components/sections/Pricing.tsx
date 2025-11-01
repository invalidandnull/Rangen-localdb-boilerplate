"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Pricing() {
  const router = useRouter();

  const handleGetStarted = async () => {
    router.push("/flow");
  }
  
  const handleUpgradeToPro = async () => {
    await authClient.subscription.upgrade({
      plan: "pro",
      successUrl: "/flow",
      cancelUrl: "/"
    });
  };

  const handleUpgradeToAdvanced = async () => {
    await authClient.subscription.upgrade({
      plan: "advanced",
      successUrl: "/flow",
      cancelUrl: "/"
    });
  }

  const handleCancel = async () => {
    await authClient.subscription.cancel({
      returnUrl: "/",
    });
  }

  const plans = [
    {
      name: "Free plan",
      description: "Perfect for trying out our AI content creation tools.",
      price: "Free",
      features: [
        "200 credits to start",
        "Upload Docs & PDFs",
        "Paste any content easily",
        "Basic AI content analysis",
        "Local data storage only"
      ],
      buttonVariant: "default" as const,
      buttonText: "Get started",
      buttonClass: "bg-primary",
      handleUpgrade: handleGetStarted
    },
    {
      name: "Pro plan",
      description: "For content creators who need more power.",
      price: "$19",
      features: [
        "2000 credits per month",
        "All features from Free plan",
        "Advanced AI content generation",
        "Unlimited flow workspaces",
        "Priority content processing",
        "Cloud sync across devices"
      ],
      buttonVariant: "secondary" as const,
      buttonText: "Upgrade now",
      buttonClass: "bg-white text-primary hover:bg-gray-100",
      highlight: true,
      handleUpgrade: handleUpgradeToPro
    },
    {
      name: "Advanced plan",
      description: "For teams and power users.",
      price: "$29",
      features: [
        "5000 credits per month",
        "All features from Pro plan",
        "Team collaboration tools",
        "Advanced analytics",
      ],
      buttonVariant: "default" as const,
      buttonText: "Get Advanced",
      buttonClass: "bg-primary",
      handleUpgrade: handleUpgradeToAdvanced
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#E2E8F0_0%,_transparent_40%)] opacity-40" /> */}
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="secondary" className="mb-4">
            Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose your plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade as you grow. All plans include core AI features.
          </p>
        </motion.div>

        {/* Pricing grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-card rounded-3xl p-8 ${
                plan.highlight 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "border shadow-sm"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                <p className={`text-sm ${plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Free" && (
                  <span className={`${plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>/mo</span>
                )}
                {plan.highlight && (
                  <div className="text-sm text-primary-foreground/80 mt-1">
                    Most popular
                  </div>
                )}
              </div>

              <Button 
                className={`w-full mb-8 ${plan.buttonClass}`}
                variant={plan.buttonVariant}
                onClick={plan.handleUpgrade}
              >
                {plan.buttonText}
              </Button>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${
                      plan.highlight ? "text-primary-foreground" : "text-primary"
                    }`} />
                    <span className={`text-sm ${
                      plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* <button className={`text-sm mt-6 ${
                plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}>
                Learn more
              </button> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
