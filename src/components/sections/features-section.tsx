import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { Shield, Zap, DollarSign, Plug } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant Settlements',
    description: 'Receive your funds instantly, with no waiting periods.',
  },
  {
    icon: DollarSign,
    title: 'Low Fees',
    description: 'Enjoy competitive transaction fees, starting at just 0.5%.',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Protect your business with industry-leading security features.',
  },
  {
    icon: Plug,
    title: 'Easy Integration',
    description: `Seamlessly integrate ${siteConfig.name} into your existing payment system.`,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Choose {siteConfig.name}?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {siteConfig.name} offers a suite of features to make accepting
              cryptocurrency payments easy and secure for your business.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 animate-fade-in">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
              alt="Payment Features"
              width={583}
              height={583}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  )
}