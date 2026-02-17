import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { TechStack } from '@/components/sections/TechStack';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

export default function Home() {
    return (
        <>
            <CustomCursor />
            <ScrollProgress />
            <Navbar />

            <main className="bg-background min-h-screen overflow-x-hidden selection:bg-gray-200 selection:text-black">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <TechStack />
                <Certifications />
                <Contact />
            </main>

            <Footer />
            <ScrollToTop />
        </>
    );
}
