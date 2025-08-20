import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { ContactSection } from '@/components/sections/contact-section'
import { SupportedCoinsSection } from '@/components/sections/supported-coins-section'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <SupportedCoinsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}