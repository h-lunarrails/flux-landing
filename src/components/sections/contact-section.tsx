'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { siteConfig } from '@/config/site'

export function ContactSection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email)
    
    setEmail('')
    setIsSubmitting(false)
    alert('Thank you for your interest! We\'ll be in touch soon.')
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Get Started with {siteConfig.name}
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Sign up for a {siteConfig.name} account and start accepting
            cryptocurrency payments today.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="max-w-lg flex-1"
              disabled={isSubmitting}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Get Started'}
            </Button>
          </form>
          <p className="text-xs text-muted-foreground">
            By signing up, you agree to our{' '}
            <Link href="/terms" className="underline underline-offset-2">
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}