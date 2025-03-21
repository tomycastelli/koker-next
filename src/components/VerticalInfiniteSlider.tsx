import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { TestimonialCard } from '@/components/TestimonialCard'
import { testimonials } from '@/lib/testimonios'

export function VerticalInfiniteSlider() {
	return (
		<div className='h-full w-full overflow-hidden'>
			<InfiniteSlider gap={24} speedOnHover={40} direction='vertical' className='h-screen py-0 -mr-4'>
				{testimonials.map((testimonial, index) => (
					<TestimonialCard key={index} testimonial={testimonial} />
				))}
			</InfiniteSlider>
		</div>
	)
}
