import SignOut from "@/components/sign-out";
import Link from "next/link";
import { getServerSession } from "@/lib/auth/get-session";
import SignIn from "../sign-in";
import { Coins, Mail } from "lucide-react";

export default async function Navbar() {
  const session = await getServerSession();
  return (
    <nav className="fixed top-0 w-full bg-background z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mx-20">
          <div className="flex-1 flex justify-start items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              {/* <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div> */}
              {/* <Image src="/logo.webp" alt="Flowote" width={32} height={32} className="rounded" /> */}
              <span className="text-xl font-semibold">Rangen&apos;s NextKit</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How it works
            </Link>
            <Link
              href="/#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
          </div>

          <div className="flex-1 flex justify-end items-center gap-4">
            {session?.user ? (
              <div className="flex items-center gap-2">
                <Mail />
                {session.user?.email}
                <Coins />
                {session.user?.credit}
                <SignOut />
              </div>
            ) : (
              <SignIn />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
