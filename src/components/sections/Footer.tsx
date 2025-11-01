import { Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const links = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
    ],
    legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  };

  return (
    <footer className="border-t bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 py-12 m-5 p-25">
          {/* Logo and description */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-semibold">NextKit</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              A Next.js starter kit with everything you need to build your next project.
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" asChild>
                <a href="https://twitter.com/rangenchenh" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Links wrapper */}
          <div className="flex justify-center md:justify-end gap-16">
            {/* Product links */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold mb-3">Product</h3>
              <ul className="space-y-2">
                {links.product.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal links */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                {links.legal.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t py-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} NextKit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
