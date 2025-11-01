"use client"
import React from 'react'
import { Button } from './ui/button'
import { authClient } from '@/lib/auth-client'
import { ArrowRight } from 'lucide-react'

export default function SignIn() {
  return (
    <Button
      className="gap-2"
      onClick={async () => {
        await authClient.signIn.social({
          provider: "google",
          callbackURL: "/"
        });
      }}
    >
      Create Better Content Now
      <ArrowRight className="w-4 h-4" />
    </Button>
  )
}