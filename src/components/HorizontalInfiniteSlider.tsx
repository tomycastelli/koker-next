import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { TestimonialCard } from '@/components/TestimonialCard'
import { testimonials } from '@/lib/testimonios'

export function HorizontalInfiniteSlider() {
	return (
		<div className='w-full overflow-hidden'>
			<InfiniteSlider gap={24} speedOnHover={40} reverse className='w-screen py-0 -ml-4 -mr-4'>
				{testimonials.map((testimonial, index) => (
					<TestimonialCard key={index} testimonial={testimonial} />
				))}
			</InfiniteSlider>
		</div>
	)
}
