import { env } from '@/env'
import { createOpenAI } from '@ai-sdk/openai'
import { generateText } from 'ai'

if (!env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable')
}

export const openai = createOpenAI({
  apiKey: env.OPENAI_API_KEY || '',
  baseURL: env.OPENAI_API_BASE,
})

export async function generateMessage(messages:string) {
  const response = await generateText({
    prompt: messages,
    model: openai('gpt-4o-mini'),
  })
  return response.text
}
