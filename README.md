# Flux - Cryptocurrency Payment Processor

A modern, secure cryptocurrency payment gateway built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Instant Settlements** - Receive funds immediately
- 💰 **Low Fees** - Competitive rates starting at 0.5%
- 🔒 **Secure** - Industry-leading security features
- 🔌 **Easy Integration** - Simple API and SDK
- 🌍 **Multi-Currency** - Support for 50+ cryptocurrencies
- 📱 **Responsive** - Works on all devices
- 🎨 **Modern UI** - Clean, professional design

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fluxpayments/flux-website.git
cd flux-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js 14 App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── sections/       # Page sections
│   ├── ui/            # Reusable UI components
│   ├── header.tsx     # Site header
│   └── footer.tsx     # Site footer
├── config/            # Configuration files
│   └── site.ts        # Site configuration
├── lib/               # Utility functions
│   └── utils.ts       # Common utilities
└── types/             # TypeScript type definitions
    └── index.ts       # Shared types
```

## Customization

### Site Configuration

Edit `src/config/site.ts` to update:
- Site name and description
- Social media links
- Contact information
- SEO metadata

### Styling

The project uses Tailwind CSS with a custom design system:
- Colors and themes in `src/app/globals.css`
- Component variants in `tailwind.config.js`
- Custom animations and utilities

### Content

Update the content in:
- `src/components/sections/hero-section.tsx` - Hero section
- `src/components/sections/features-section.tsx` - Features
- `src/components/sections/supported-coins-section.tsx` - Supported cryptocurrencies
- `src/components/sections/contact-section.tsx` - Contact form

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

Build the project:
```bash
npm run build
```

The static files will be generated in the `.next` folder.

## Performance

- ✅ Lighthouse Score: 95+
- ✅ Core Web Vitals optimized
- ✅ Image optimization with Next.js Image
- ✅ Font optimization with Next.js Fonts
- ✅ Bundle size optimization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@fluxpayments.tech or visit our [documentation](https://fluxpayments.notion.site/).