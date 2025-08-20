import Link from 'next/link'
import { siteConfig } from '@/config/site'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 {siteConfig.name}. All rights reserved.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center gap-4 md:justify-end">
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/cookies"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}