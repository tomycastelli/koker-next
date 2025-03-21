import { Carousel, CarouselContent, CarouselItem, CarouselNavigation } from '@/components/motion-primitives/carousel'
import { Tilt } from '@/components/motion-primitives/tilt'
import { teamMembers } from '@/lib/team'
import { TeamMemberCard } from './TeamMemberCard'

export function TeamSection() {
	return (
		<section
			className='relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white py-20 sm:py-24 md:py-28'
			style={{
				backgroundImage: 'url(/white-waves.jpg)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
			}}
		>
			<div className='absolute inset-0 bg-black/5 backdrop-blur-[2px]' />

			<div className='container relative z-10 px-6 sm:px-8 md:px-10 w-full'>
				<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-left tracking-wider'>Nuestro equipo</h2>

				<Carousel>
					<CarouselContent className='-ml-4'>
						{teamMembers.map((member, index) => (
							<CarouselItem key={index} className='basis-1/1 ssm:basis-1/2 md:basis-1/3 pl-4 h-full'>
								<Tilt rotationFactor={8} isRevese className='h-full'>
									<TeamMemberCard member={member} />
								</Tilt>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselNavigation
						className='absolute -bottom-20 left-1/2 top-auto w-full -translate-x-1/2 justify-center gap-2'
						classNameButton='bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800'
						alwaysShow
					/>
				</Carousel>
			</div>
		</section>
	)
}
