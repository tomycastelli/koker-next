export type CryptoData = {
	id: string
	name: string
	symbol: string
	logo: string
	price: number
}

export const cryptoConfig: Array<Omit<CryptoData, 'price'>> = [
	{ id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', logo: '/btc.svg' },
	{ id: 'ethereum', name: 'Ethereum', symbol: 'ETH', logo: '/eth.svg' },
	{ id: 'solana', name: 'Solana', symbol: 'SOL', logo: '/sol.png' },
	{ id: 'binancecoin', name: 'BNB', symbol: 'BNB', logo: '/bnb.svg' },
]
