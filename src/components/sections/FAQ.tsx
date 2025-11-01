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
      question: "What is NextKit?",
      answer: "NextKit is a Next.js starter kit designed to help you launch your projects faster. It comes pre-configured with authentication, a database, UI components, and other essential features."
    },
    {
      question: "What technologies are used?",
      answer: "This starter kit is built with Next.js, TypeScript, Tailwind CSS, Shadcn UI for components, Drizzle ORM for the database, and BetterAuth for authentication."
    },
    {
      question: "Is it production-ready?",
      answer: "Yes, NextKit is designed to be a solid foundation for production applications. It includes best practices for project structure, environment variables, and more."
    },
    // {
    //   question: "Can I collaborate with my team?",
    //   answer: "Yes! Pro plan users can share their workspaces and collaborate on content creation. Advanced plan users get additional team features like role management, shared templates, and analytics tracking for team performance."
    // },
    {
      question: "How can I deploy it?",
      answer: "You can deploy this project to any platform that supports Next.js, such as Vercel, Netlify, or your own server. Just connect your Git repository and follow the platform's instructions."
    },
    // {
    //   question: "Is there a limit to how much content I can upload?",
    //   answer: "Free plans can upload up to 5 sources per flow. Pro plans allow unlimited uploads with a 100MB size limit per file. Advanced plans increase this to 500MB per file and add support for additional file formats."
    // },
    {
      question: "Is it customizable?",
      answer: "Absolutely! The entire codebase is available for you to modify. You can easily change the styling, add new features, or integrate with other services to fit your needs."
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
            Here are some common questions about NextKit.
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
