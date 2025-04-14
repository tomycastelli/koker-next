export type CryptoData = {
	id: string
	name: string
	symbol: string
	logo: string
	price: number
	color: string
}

export const cryptoConfig: Array<Omit<CryptoData, 'price'>> = [
	{ id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', logo: '/btc.svg', color: '#C45E0A' },
	{ id: 'ethereum', name: 'Ethereum', symbol: 'ETH', logo: '/eth.svg', color: '#4A5EBA' },
	{ id: 'solana', name: 'Solana', symbol: 'SOL', logo: '/sol.png', color: '#4A4CAD' },
	{ id: 'binancecoin', name: 'BNB', symbol: 'BNB', logo: '/bnb.svg', color: '#C49A1F' },
	{ id: 'usdt', name: 'USDT', symbol: 'USDT', logo: '/usdt.svg', color: '#1A6352' },
]
