// import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Features() {
  return (
    <section className="py-24 relative" id="features">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Here&apos;s How You Turn Ideas
            <span className="block">Into Winning Content 5x Faster</span>
          </h2>
        </div>

        {/* Feature 1: Bring your Sources */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24 max-w-7xl mx-auto">
          {/* Image placeholder */}
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 border shadow-lg p-8 flex items-center justify-center">
            {/* <div className="w-24 h-24 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-blue-500/40" />
            </div> */}
            <Image src={"/features/1.png"} alt="Bring your Sources" className="rounded-xl" width={500} height={500} />
          </div>
          
          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Bring your Sources
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Upload your existing content - videos, websites, PDFs. AI automatically analyzes and organizes everything. No formatting, no prep work, just instant understanding.
            </p>
            <Button variant="outline" className="gap-2">
              Start for free
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Feature 2: AI-Powered Analysis */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24 max-w-7xl mx-auto">
          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Connect the Dots
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our AI analyzes your content, identifies key themes, and creates meaningful connections. Discover insights and patterns you might have missed.
            </p>
            <Button variant="outline" className="gap-2">
              See it in action
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Image placeholder */}
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-100 to-purple-50 border shadow-lg p-8 flex items-center justify-center">
            {/* <div className="w-24 h-24 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-purple-500/40" />
            </div> */}
            <Image src={"/features/2.png"} alt="Bring your Sources" className="rounded-xl" width={500} height={500} />
          </div>
        </div>

        {/* Feature 3: Content Generation */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24 max-w-7xl mx-auto">
          {/* Image placeholder */}
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-100 to-emerald-50 border shadow-lg p-8 flex items-center justify-center">
            {/* <div className="w-24 h-24 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/40" />
            </div> */}
            <Image src={"/features/31.png"} alt="Bring your Sources" className="rounded-xl" width={500} height={500} />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Generate Winning Content
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Transform your research into engaging content. Our AI helps you create blog posts, social media content, and more while maintaining your brand&apos;s voice.
            </p>
            <Button variant="outline" className="gap-2">
              Try it yourself
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Feature 4: Collaboration */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Share and Collaborate
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Work together with your team in real-time. Share your research, get feedback, and iterate on content until it&apos;s perfect.
            </p>
            <Button variant="outline" className="gap-2">
              Start collaborating
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Image placeholder */}
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-100 to-amber-50 border shadow-lg p-8 flex items-center justify-center">
            {/* <div className="w-24 h-24 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-amber-500/40" />
            </div> */}
            <Image src={"/features/4.png"} alt="Bring your Sources" className="rounded-xl" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
}
