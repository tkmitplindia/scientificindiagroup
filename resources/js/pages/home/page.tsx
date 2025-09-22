import { Head } from '@inertiajs/react';
import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AboutUsSection } from './AboutUsSection';
import { ClientsSection } from './ClientsSection';
import { ExpertiseSection } from './ExpertiseSection';
import { FaqSection } from './FaqSection';
import { GetInTouch } from './GetInTouch';
import { HeroSection } from './HeroSection';
import { Navbar } from './Navbar';
import { WhyChooseUsSection } from './WhyChooseUsSection';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className="fixed right-8 bottom-8 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <ChevronUp className="m-4 h-10 w-10 text-white dark:text-gray-900" />
        </div>
    );
}

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#F6F8F9] dark:bg-[#121212]">
            <Head>
                <title>Scientific India Group</title>
            </Head>
            <div className="bg-[url('/images/gradient-bg.webp')] bg-cover bg-center">
                <Navbar />
                <HeroSection />
            </div>
            <ClientsSection />
            <AboutUsSection />
            <ExpertiseSection />
            <WhyChooseUsSection />
            <FaqSection />
            <GetInTouch />
            <ScrollToTop />
        </div>
    );
}
