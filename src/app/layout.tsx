import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Cryptocurrency Payment',
    'Blockchain Payments',
    'Digital Currency Processing',
    'Crypto Payment Gateway',
    'Merchant Crypto Solutions',
    'Flux Payments',
    'Ethereum Payments',
    'Bitcoin Payments',
    'Stablecoin Transactions',
    'Cross-border Crypto Payments',
    'Decentralized Finance (DeFi) Payments',
    'Web3 Payment Integration',
    'Crypto E-commerce Solutions',
    'Instant Crypto Settlements',
    'Multi-cryptocurrency Support',
    'Secure Blockchain Transactions',
    'Crypto Payment API',
    'Non-custodial Payment Processing',
    'Crypto Point of Sale (POS)',
    'Smart Contract Payments',
  ],
  authors: [
    {
      name: 'Flux Payments',
      url: siteConfig.url,
    },
  ],
  creator: 'flux',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@fluxpayments',
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}