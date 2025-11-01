// import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <section className="py-24 relative" id="features">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Here&apos;s How You Turn Ideas
            <span className="block">Into Winning 5x Faster</span>
          </h2>
        </div>

        {/* Feature 1: Bring your Sources */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24 max-w-7xl mx-auto">
          {/* Image placeholder */}
          <div className="aspect-square rounded-3xl bg-linear-to-br from-blue-100 to-blue-50 border shadow-lg p-8 flex items-center justify-center">
            {/* <div className="w-24 h-24 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-blue-500/40" />
            </div> */}
            {/* <Image src={"/features/1.png"} alt="Bring your Sources" className="rounded-xl" width={500} height={500} /> */}
          </div>
          
          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Authentication Ready
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Secure, cookie-based authentication with BetterAuth. Supports email/password, social logins, and more.
            </p>
            <Button variant="outline" className="gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Feature 2: AI-Powered Analysis */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24 max-w-7xl mx-auto">
          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Database Included
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Comes with Drizzle ORM and a local SQLite database. Easily switch to PostgreSQL or MySQL.
            </p>
            <Button variant="outline" className="gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Image placeholder */}
          <div className="aspect-square rounded-3xl bg-linear-to-br from-purple-100 to-purple-50 border shadow-lg p-8 flex items-center justify-center">
            {/* <div className="w-24 h-24 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-purple-500/40" />
            </div> */}
            {/* <Image src={"/features/2.png"} alt="Bring your Sources" className="rounded-xl" width={500} height={500} /> */}
          </div>
        </div>

        {/* Feature 3: Content Generation */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24 max-w-7xl mx-auto">
          {/* Image placeholder */}
          <div className="aspect-square rounded-3xl bg-linear-to-br from-emerald-100 to-emerald-50 border shadow-lg p-8 flex items-center justify-center">
            {/* <div className="w-24 h-24 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/40" />
            </div> */}
            {/* <Image src={"/features/31.png"} alt="Bring your Sources" className="rounded-xl" width={500} height={500} /> */}
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              UI Components
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Beautifully designed components from Shadcn UI. Fully customizable with Tailwind CSS.
            </p>
            <Button variant="outline" className="gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Feature 4: Collaboration */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              And Much More
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Includes Stripe integration for payments, dark mode, and a clean project structure.
            </p>
            <Button variant="outline" className="gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Image placeholder */}
          <div className="aspect-square rounded-3xl bg-linear-to-br from-amber-100 to-amber-50 border shadow-lg p-8 flex items-center justify-center">
            {/* <div className="w-24 h-24 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-amber-500/40" />
            </div> */}
            {/* <Image src={"/features/4.png"} alt="Bring your Sources" className="rounded-xl" width={500} height={500} /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
