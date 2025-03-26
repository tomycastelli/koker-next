import { AboutSection } from '@/components/AboutSection'
import { ContactSection } from '@/components/ContactSection'
import { HeroSection } from '@/components/HeroSection'

export default function Home() {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<ContactSection />
		</main>
	)
}
