import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { TeamMember } from '@/lib/team'
import Image from 'next/image'

interface TeamMemberCardProps {
	member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
	return (
		<Card className='w-full h-full flex flex-col bg-black/10 backdrop-blur-sm border-white/10 text-white'>
			<CardHeader className='pb-2'>
				<CardTitle className='text-lg truncate'>{member.name}</CardTitle>
				<CardDescription className='text-white/70 text-sm truncate'>{member.position}</CardDescription>
			</CardHeader>
			<CardContent className='flex-grow py-2 flex justify-center items-center'>
				<Image
					src={member.image}
					alt={member.alt}
					width={180}
					height={180}
					className='aspect-square rounded-[4px] object-cover select-none pointer-events-none'
					draggable={false}
				/>
			</CardContent>
			<CardFooter className='pt-1'>
				<p className='text-xs leading-relaxed text-white/80 line-clamp-2'>{member.description}</p>
			</CardFooter>
		</Card>
	)
}
