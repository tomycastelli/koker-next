import { TextScramble } from '@/components/motion-primitives/text-scramble'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
	return (
		<nav className='fixed top-0 left-0 right-0 z-50 w-full'>
			<div className='w-5/6 mx-auto flex flex-row md:justify-between justify-center items-center py-2 md:py-3'>
				<Link href='/' className='flex transition-transform hover:scale-105 md:mb-0 mb-6 flex-row gap-x-1 items-center'>
					<div className='w-20 h-20 md:w-24 md:h-24 pt-1 md:pt-2'>
						<Image src='/logo.png' alt='Logo de Koker' width={96} height={96} priority />
					</div>
					<TextScramble
						duration={1.5}
						className='font-bold text-4xl lg:text-5xl font-integral tracking-widest text-white'
					>
						Koker
					</TextScramble>
				</Link>
				<div className='md:block hidden'>
					<div className='flex flex-row gap-x-6 md:gap-x-10 pt-1 text-lg md:text-xl lg:text-2xl'>
						<Link
							href='#soluciones'
							className='transition-transform hover:scale-110 hover:underline underline-offset-8 text-white'
						>
							Soluciones
						</Link>
						<Link
							href='#contacto'
							className='transition-transform hover:scale-110 hover:underline underline-offset-8 text-white'
						>
							Contacto
						</Link>
					</div>
				</div>
				<div className='md:hidden block'>{/* Mobile menu can be added here if needed */}</div>
			</div>
		</nav>
	)
}
