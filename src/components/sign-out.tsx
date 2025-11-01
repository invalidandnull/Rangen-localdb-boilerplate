"use client"
import { authClient } from '@/lib/auth-client'
import React from 'react'
import { Button } from './ui/button'
import { redirect } from 'next/navigation'

const SignOut = () => {
  return (
    <div>
      <Button onClick={async () => {
        await authClient.signOut()
        redirect('/')
      }}>Sign out</Button>
    </div>
  )
}

export default SignOut