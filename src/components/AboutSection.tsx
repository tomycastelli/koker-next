import { HorizontalInfiniteSlider } from '@/components/HorizontalInfiniteSlider'
import { TransitionPanelComponent } from '@/components/TransitionPanelComponent'
import { VerticalInfiniteSlider } from '@/components/VerticalInfiniteSlider'

export function AboutSection() {
	return (
		<>
			{/* Main section - Screen height for lg (vertical slider), flexible for smaller screens */}
			<section
				id='about'
				className='relative w-full min-h-screen lg:h-screen py-16 lg:py-0 flex items-center justify-center overflow-hidden text-white'
				style={{
					backgroundImage: 'url(/blue-gradient.jpg)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundAttachment: 'fixed',
				}}
			>
				<div className='absolute inset-0 bg-black/5 backdrop-blur-[2px]' />

				{/* Main content layout */}
				<div className='relative z-10 w-full h-full flex items-center'>
					{/* Grid layout: 1 column on smaller screens, 2 columns on lg+ */}
					<div className='grid grid-cols-1 lg:grid-cols-2 w-full h-full'>
						{/* First grid cell - TransitionPanelComponent with padding */}
						<div className='flex flex-col items-center text-center lg:items-start lg:text-left px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 lg:py-16'>
							<TransitionPanelComponent />
						</div>

						{/* Second grid cell - Different sliders based on screen size - NO PADDING for edge-to-edge sliders */}
						<div className='w-full h-full flex items-center justify-center'>
							{/* Vertical slider for large screens - extends to screen edges */}
							<div className='hidden lg:block w-full h-full'>
								<VerticalInfiniteSlider />
							</div>

							{/* Horizontal slider for smaller screens - extends to screen edges */}
							<div className='block lg:hidden w-full'>
								<HorizontalInfiniteSlider />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
