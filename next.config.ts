import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [{ hostname: 'i.scdn.co' }],
		unoptimized: false,
	},
	experimental: {},
	poweredByHeader: false,
}

export default nextConfig
