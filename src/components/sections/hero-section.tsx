import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Accept Cryptocurrency Payments with{' '}
                <span className="text-primary">{siteConfig.name}</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {siteConfig.description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/dashboard/home">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link
                  href="https://fluxpayments.notion.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center lg:order-last">
            <Image
              src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg"
              width={550}
              height={550}
              alt="Cryptocurrency Payment Processing"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover animate-fade-in"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}