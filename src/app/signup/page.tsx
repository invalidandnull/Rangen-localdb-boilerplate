import Link from "next/link";

import { SignupForm } from "@/components/forms/signup-form";

export default function SignupPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          NextKit
        </Link>
        <SignupForm />
      </div>
    </div>
  );
}
