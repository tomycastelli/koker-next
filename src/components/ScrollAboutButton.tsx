'use client'

import { ChevronDownIcon } from '@radix-ui/react-icons'

export const ScrollAboutButton = () => {
	return (
		<button
			onClick={() => {
				const aboutSection = document.getElementById('about')
				if (aboutSection) {
					aboutSection.scrollIntoView({ behavior: 'smooth' })
				}
			}}
			className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 bg-black/30 backdrop-blur-md p-3 rounded-full border border-white/10 hover:bg-black/50 transition-all duration-300 hover:scale-110 animate-bounce'
			aria-label='Scroll to About section'
		>
			<ChevronDownIcon className='h-6 w-6 text-white' />
		</button>
	)
}
