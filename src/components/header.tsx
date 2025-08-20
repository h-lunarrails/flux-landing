'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={siteConfig.ogImage}
            alt={siteConfig.name}
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="font-bold text-xl">{siteConfig.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-auto items-center space-x-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#supported-coins"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Supported Coins
          </Link>
          <Link
            href="https://fluxpayments.notion.site/"
            className="text-sm font-medium hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Button asChild>
            <Link href="/dashboard/home">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            <Link
              href="#features"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              href="#supported-coins"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Supported Coins
            </Link>
            <Link
              href="https://fluxpayments.notion.site/"
              className="block text-sm font-medium hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Documentation
            </Link>
            <Link
              href="#contact"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button asChild className="w-full">
              <Link href="/dashboard/home">Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}