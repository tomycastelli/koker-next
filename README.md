# Koker OTC Crypto

Koker is a specialized OTC (Over-The-Counter) crypto exchange platform focused on high-value transactions and corporate clients.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Animation**: Motion Primitives
- **Language**: TypeScript
- **Components**: ShadcnUI + Radix UI
- **Deployment**: Vercel

## Local Development

First, clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/koker-next.git
cd koker-next
npm install
```

Create a `.env.local` file in the root directory with the following content:

```
COINGECKO_API_KEY=your_coingecko_api_key_here
```

You can get a CoinGecko API key by signing up at [https://www.coingecko.com/en/api](https://www.coingecko.com/en/api).

Then, start the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment on Vercel

This project is configured for easy deployment on Vercel. Follow these steps:

1. Create a Vercel account at [https://vercel.com/signup](https://vercel.com/signup) if you don't have one
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Login to Vercel:
   ```bash
   vercel login
   ```
4. Deploy the project:

   ```bash
   vercel
   ```

   For production deployment:

   ```bash
   vercel --prod
   ```

### Environment Variables

You'll need to configure the following environment variables in the Vercel dashboard:

- `COINGECKO_API_KEY`: Your CoinGecko API key

To set up environment variables in Vercel:

1. Go to your project in the Vercel dashboard
2. Navigate to Settings > Environment Variables
3. Add the variables mentioned above

## Manual Deployment

If you prefer to deploy manually, build the project first:

```bash
npm run build
```

Then start the production server:

```bash
pnpm start
```

## Optimizations

For the best performance:

1. Ensure all images are properly optimized and use the Next.js Image component
2. Keep the CoinGecko API key secure in environment variables
3. Use the built-in caching system in Next.js for API requests

## License

[MIT](https://choosealicense.com/licenses/mit/)
