"use client"
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSesion() {
  const faqs = [
    {
      question: "How does the AI content analysis work?",
      answer: "Our AI analyzes your uploaded content (videos, PDFs, websites) and automatically extracts key information, themes, and insights. It organizes everything into a visual workspace, making it easy to understand and transform into new content."
    },
    {
      question: "What types of content can I create?",
      answer: "You can create various types of content including blog posts, social media content, newsletters, and more. Our AI helps you transform your research and sources into engaging content while maintaining your brand's voice and style."
    },
    {
      question: "How do credits work?",
      answer: "Credits are used for AI operations like content analysis, generation, and transformation. Free plans start with 200 credits, Pro plans get 2000 credits monthly, and Advanced plans receive 5000 credits. Different operations use different amounts of credits based on complexity."
    },
    // {
    //   question: "Can I collaborate with my team?",
    //   answer: "Yes! Pro plan users can share their workspaces and collaborate on content creation. Advanced plan users get additional team features like role management, shared templates, and analytics tracking for team performance."
    // },
    {
      question: "How does the flow workspace help with content creation?",
      answer: "The flow workspace is an infinite canvas where you can connect different content sources, ideas, and generated content. The AI helps identify connections between your materials and suggests ways to repurpose content across different formats."
    },
    // {
    //   question: "Is there a limit to how much content I can upload?",
    //   answer: "Free plans can upload up to 5 sources per flow. Pro plans allow unlimited uploads with a 100MB size limit per file. Advanced plans increase this to 500MB per file and add support for additional file formats."
    // },
    {
      question: "Can I try the platform before subscribing?",
      answer: "Yes! Our free plan includes 200 credits and core features so you can experience the platform's capabilities. No credit card is required to start, and you can upgrade to Pro or Advanced whenever you're ready."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#E2E8F0_0%,_transparent_40%)] opacity-40" />
      
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
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our content creation platform
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm rounded-xl border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 hover:cursor-pointer">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
