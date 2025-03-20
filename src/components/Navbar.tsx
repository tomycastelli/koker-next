import { TextScramble } from '@/components/motion-primitives/text-scramble'
import { RegisterDialog } from '@/components/RegisterDialog'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
	return (
		<nav className='absolute top-0 left-0 right-0 z-50 w-full'>
			<div className='w-5/6 mx-auto flex flex-row justify-between items-center py-2 md:py-3'>
				<Link href='/' className='flex transition-transform hover:scale-105 flex-row gap-x-1 items-center'>
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
				<div className='flex items-center gap-x-8'>
					<div className='md:flex hidden flex-row gap-x-6 md:gap-x-10 pt-1 text-lg md:text-xl lg:text-2xl'>
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
					<RegisterDialog />
				</div>
			</div>
		</nav>
	)
}
