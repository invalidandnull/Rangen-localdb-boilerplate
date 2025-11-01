"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation';
import { authClient, useSession } from '@/lib/auth-client';
import { cn } from "@/lib/utils";

export default function Hero() {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      {/* Dot pattern background */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[20px_20px]",
          "bg-[radial-gradient(#e5e5e5_1px,transparent_1px)]",
          "dark:bg-[radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient fade effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mb-6">
            <div className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              Supercharge Your Content
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mt-2">
              With AI-Powered Workflow
            </div>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create, edit, and publish content 5x faster with our intelligent workflow platform. 
            Let AI handle the heavy lifting while you focus on what matters most - your creativity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {session ? (
              <Button size="lg" className="gap-2 hover:cursor-pointer" onClick={() => router.push("/flow")}>
                Start creating for free
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button size="lg" className="gap-2 hover:cursor-pointer" onClick={async () => {
                await authClient.signIn.social({
                  provider: "google",
                  callbackURL: "/flow"
                });
              }}>
                Start creating for free
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
