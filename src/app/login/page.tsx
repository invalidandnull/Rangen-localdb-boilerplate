import Link from "next/link";

import { LoginForm } from "@/components/forms/login-form";
import { getServerSession } from "@/lib/auth/get-session";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          Better Auth Starter
        </Link>
        <LoginForm />
      </div>
    </div>
  );
}
