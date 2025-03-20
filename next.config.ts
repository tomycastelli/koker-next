import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [],
		unoptimized: false,
	},
	experimental: {},
	poweredByHeader: false,
}

export default nextConfig
