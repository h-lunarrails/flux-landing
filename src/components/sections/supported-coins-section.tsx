import { Bitcoin, Coins, DollarSign } from 'lucide-react'

const supportedCoins = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: Bitcoin,
    description: 'The original cryptocurrency',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    icon: Coins,
    description: 'Smart contract platform',
  },
  {
    name: 'USDC',
    symbol: 'USDC',
    icon: DollarSign,
    description: 'USD-backed stablecoin',
  },
  {
    name: 'USDT',
    symbol: 'USDT',
    icon: DollarSign,
    description: 'Tether stablecoin',
  },
  {
    name: 'Litecoin',
    symbol: 'LTC',
    icon: Coins,
    description: 'Digital silver',
  },
  {
    name: 'Polygon',
    symbol: 'MATIC',
    icon: Coins,
    description: 'Layer 2 scaling solution',
  },
]

export function SupportedCoinsSection() {
  return (
    <section id="supported-coins" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Supported Cryptocurrencies
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Accept 50+ Digital Currencies
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Support for major cryptocurrencies and stablecoins, with more being added regularly.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {supportedCoins.map((coin, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 text-center animate-fade-in hover:shadow-lg transition-shadow"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <coin.icon className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  {coin.name} ({coin.symbol})
                </h3>
                <p className="text-sm text-muted-foreground">{coin.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <p className="text-muted-foreground">
            And many more... Contact us for specific cryptocurrency support.
          </p>
        </div>
      </div>
    </section>
  )
}