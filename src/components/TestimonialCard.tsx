import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Testimonial } from '@/lib/testimonios'
import { QuoteIcon } from '@radix-ui/react-icons'

interface TestimonialCardProps {
	testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
	return (
		<Card className='w-[320px] h-[320px] flex flex-col bg-white/5 backdrop-blur-sm border-white/10 text-white'>
			<CardHeader className='pb-2'>
				<div className='flex justify-between items-start'>
					<CardTitle className='text-xl'>{testimonial.user}</CardTitle>
					<QuoteIcon className='h-6 w-6 text-white/40' />
				</div>
				{testimonial.company && <CardDescription className='text-white/70'>{testimonial.company}</CardDescription>}
			</CardHeader>
			<CardContent className='flex-grow py-2'>
				<p className='text-sm leading-relaxed italic'>{testimonial.testimonial}</p>
			</CardContent>
		</Card>
	)
}
