import { AboutSection } from '@/components/AboutSection'
import { ContactSection } from '@/components/ContactSection'
import { HeroSection } from '@/components/HeroSection'
import { TeamSection } from '@/components/TeamSection'

export default function Home() {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<TeamSection />
			<ContactSection />
		</main>
	)
}
