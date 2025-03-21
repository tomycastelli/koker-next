'use client'

import { AnimatedNumber } from '@/components/motion-primitives/animated-number'
import { Badge } from '@/components/ui/badge'
import { CryptoData } from '@/lib/crypto'
import Image from 'next/image'
import { useEffect, useState } from 'react'
type CryptoCardProps = {
	crypto: CryptoData
	className?: string
}

export function CryptoCard({ crypto, className }: CryptoCardProps) {
	const { name, symbol, logo, price } = crypto

	const [priceValue, setPriceValue] = useState(0)

	useEffect(() => {
		setPriceValue(price)
	}, [price])

	// Generate random position for the price tag
	// This creates a fixed random position based on the crypto symbol
	// Each crypto will have its own consistent position
	const positions = [
		'top-[10px] left-[10px] sm:top-[15px] sm:left-[15px] md:top-[18px] md:left-[18px] lg:top-[15px] lg:left-[15px] xl:top-[18px] xl:left-[18px]', // top left
		'top-[10px] right-[10px] sm:top-[15px] sm:right-[15px] md:top-[18px] md:right-[18px] lg:top-[15px] lg:right-[15px] xl:top-[18px] xl:right-[18px]', // top right
		'bottom-[10px] left-[10px] sm:bottom-[15px] sm:left-[15px] md:bottom-[18px] md:left-[18px] lg:bottom-[15px] lg:left-[15px] xl:bottom-[18px] xl:left-[18px]', // bottom left
		'bottom-[10px] right-[10px] sm:bottom-[15px] sm:right-[15px] md:bottom-[18px] md:right-[18px] lg:bottom-[15px] lg:right-[15px] xl:bottom-[18px] xl:right-[18px]', // bottom right
	]

	// Use the first character of the symbol as a simple hash to pick a position
	const positionIndex = symbol.charCodeAt(0) % positions.length
	const positionClass = positions[positionIndex]

	return (
		<div className={`relative group ${className}`}>
			{/* Price Tag Badge - Random positioning */}
			<Badge
				variant='outline'
				className={`absolute ${positionClass} z-20
					bg-green-500 text-white border-0 
					px-2 py-0.5 text-xs sm:text-sm md:px-3 md:py-1 lg:text-xs lg:px-2 lg:py-0.5 xl:text-sm xl:px-3 xl:py-1 rounded-lg shadow-md transition-all 
					duration-300 group-hover:scale-110 group-hover:brightness-110`}
			>
				<p className='font-mono lg:text-xl text-md md:text-lg'>{symbol === 'USDT' ? 'ARS' : '$'}</p>
				<AnimatedNumber
					className='font-mono lg:text-xl text-md md:text-lg'
					value={priceValue}
					springOptions={{
						bounce: 0,
						duration: 3000,
					}}
				/>
			</Badge>

			{/* Icon Circle Background with subtle glow effect */}
			<div
				className='relative h-28 w-28 sm:h-36 sm:w-36 md:h-42 md:w-42 lg:h-40 lg:w-40 xl:h-48 xl:w-48 rounded-full flex items-center justify-center 
				transition-transform duration-300 group-hover:scale-110 bg-transparent'
			>
				{/* Hover glow effect */}
				<div className='absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300'></div>

				{/* Content container */}
				<div className='relative z-10 h-24 w-24 sm:h-30 sm:w-30 md:h-36 md:w-36 lg:h-34 lg:w-34 xl:h-42 xl:w-42 flex items-center justify-center'>
					{/* Image sized consistently for all cryptos */}
					<div className='relative z-10 h-21 w-21 sm:h-27 sm:w-27 md:h-30 md:w-30 lg:h-30 lg:w-30 xl:h-38 xl:w-38'>
						<Image
							src={logo}
							alt={`${name} logo`}
							fill
							sizes='(max-width: 640px) 84px, (max-width: 768px) 108px, (max-width: 1024px) 120px, (max-width: 1280px) 120px, 152px'
							className='object-contain'
						/>
					</div>
				</div>
			</div>

			{/* Symbol label on hover */}
			<span
				className='absolute -bottom-6 left-1/2 transform -translate-x-1/2 
				text-xs sm:text-sm font-semibold bg-neutral-800/70 text-white px-2 py-0.5 sm:px-3 sm:py-1 
				lg:text-xs lg:px-2 lg:py-0.5 xl:text-sm xl:px-3 xl:py-1 rounded-md 
				opacity-0 group-hover:opacity-100 transition-opacity duration-300'
			>
				{symbol}
			</span>
		</div>
	)
}
