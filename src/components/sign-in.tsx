"use client"
import React from 'react'
import Link from "next/link";
import { Button } from "./ui/button";

export default function SignIn() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="ghost" asChild>
        <Link href="/login">Login</Link>
      </Button>
      <Button asChild>
        <Link href="/signup">Sign Up</Link>
      </Button>
    </div>
  )
}