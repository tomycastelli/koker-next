'use server'

interface CryptoPrice {
	[key: string]: {
		usd: number
	}
}

// Cache crypto prices with a 5-minute revalidation period
export async function getCryptoPrices() {
	const apiKey = process.env.COINGECKO_API_KEY

	if (!apiKey) {
		throw new Error('COINGECKO_API_KEY is not defined in environment variables')
	}

	try {
		const response = await fetch(
			'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,binancecoin&vs_currencies=usd',
			{
				headers: {
					'x-cg-demo-api-key': apiKey,
					Accept: 'application/json',
				},
				next: {
					revalidate: 300, // Cache for 5 minutes (300 seconds)
				},
			}
		)

		if (!response.ok) {
			throw new Error(`API request failed with status ${response.status}`)
		}

		const data: CryptoPrice = await response.json()
		return data
	} catch (error) {
		console.error('Error fetching crypto prices:', error)
		// Return fallback data in case of error
		return {
			bitcoin: { usd: 0 },
			ethereum: { usd: 0 },
			solana: { usd: 0 },
			binancecoin: { usd: 0 },
		}
	}
}
