import { getCryptoPrices } from '@/app/actions/coingecko'
import { CryptoCard } from '@/components/CryptoCard'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import { TextLoop } from '@/components/motion-primitives/text-loop'
import { cryptoConfig, CryptoData } from '@/lib/crypto'
import { ScrollAboutButton } from './ScrollAboutButton'

export async function HeroSection() {
	const cryptoPrices = await getCryptoPrices()

	// Map configuration with price data
	const cryptoData: CryptoData[] = cryptoConfig.map(crypto => ({
		...crypto,
		price: cryptoPrices[crypto.id as keyof typeof cryptoPrices]?.usd || 0,
	}))

	return (
		<section
			className='relative w-full h-screen flex items-center justify-center overflow-hidden text-white pt-20 sm:pt-24 md:pt-28'
			style={{
				backgroundImage: 'url(/blue-waves.jpg)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
			}}
		>
			<div className='absolute inset-0 bg-black/5 backdrop-blur-[2px]' />

			<div className='container relative z-10 px-6 sm:px-8 md:px-10 w-full'>
				{/* Main content - vertical on smaller screens, horizontal on lg+ */}
				<div className='flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 w-full'>
					{/* Text Content */}
					<div className='flex flex-col items-center text-center md:items-start md:text-left md:w-1/2'>
						<h6 className='font-light text-lg md:text-xl tracking-wide'>
							Operaciones crypto{' '}
							<TextLoop
								className='overflow-y-clip font-semibold'
								transition={{
									type: 'spring',
									stiffness: 900,
									damping: 80,
									mass: 10,
								}}
								variants={{
									initial: {
										y: 20,
										rotateX: 90,
										opacity: 0,
										filter: 'blur(4px)',
									},
									animate: {
										y: 0,
										rotateX: 0,
										opacity: 1,
										filter: 'blur(0px)',
									},
									exit: {
										y: -20,
										rotateX: -90,
										opacity: 0,
										filter: 'blur(4px)',
									},
								}}
							>
								<span>seguras</span>
								<span>personalizadas</span>
								<span>privadas</span>
								<span>de gran volumen</span>
							</TextLoop>
						</h6>
						<h1 className='text-5xl md:text-6xl lg:text-8xl font-bold my-2 tracking-wider'>
							Exchange OTC
							<br className='lg:hidden' />
							<span className='lg:ml-6'>a tu medida</span>
						</h1>
						<h5 className='font-light text-xl lg:text-2xl tracking-wide'>
							Especializados en transacciones OTC
							<br className='lg:hidden' /> para clientes corporativos y de alto valor
						</h5>
					</div>

					{/* Crypto Prices - 3x3 Grid Layout with responsiveness */}
					<div className='w-full lg:w-1/2 max-w-xs sm:max-w-sm mx-auto lg:max-w-none'>
						<AnimatedGroup className='grid grid-cols-3 gap-0 sm:gap-1 max-w-[250px] mx-auto' preset='scale'>
							{/* Top row */}
							<div className='flex justify-center items-center scale-90'>
								<CryptoCard crypto={cryptoData[0]} />
							</div>
							<div className='flex justify-center items-center opacity-0'>{/* Empty cell */}</div>
							<div className='flex justify-center items-center scale-90'>
								<CryptoCard crypto={cryptoData[1]} />
							</div>

							{/* Middle row */}
							<div className='flex justify-center items-center opacity-0'>{/* Empty cell */}</div>
							<div className='flex justify-center items-center scale-90'>
								<CryptoCard crypto={cryptoData[4]} />
							</div>
							<div className='flex justify-center items-center opacity-0'>{/* Empty cell */}</div>

							{/* Bottom row */}
							<div className='flex justify-center items-center scale-90'>
								<CryptoCard crypto={cryptoData[2]} />
							</div>
							<div className='flex justify-center items-center opacity-0'>{/* Empty cell */}</div>
							<div className='flex justify-center items-center scale-90'>
								<CryptoCard crypto={cryptoData[3]} />
							</div>
						</AnimatedGroup>
					</div>
				</div>
			</div>

			{/* Scroll down button */}
			<ScrollAboutButton />
		</section>
	)
}
