import { Button } from '@/components/ui/button';
import { ChevronsRightIcon } from 'lucide-react';

export function HeroSection() {
    return (
        <section id="hero" className="min-h-[calc(100vh-6rem)] pb-12">
            <div className="mx-auto max-w-6xl p-4">
                <div className="grid min-h-[calc(100vh-14rem)] grid-cols-1 items-center gap-8 md:grid-cols-2">
                    <div className="space-y-8">
                        <h2 className="text-xl md:text-2xl">TRANSCENDING BOUNDARIES</h2>
                        <h1 className="text-4xl md:text-6xl">TRANSFORMING BUSINESSES</h1>
                        <p className="leading-loose">
                            Scientific India Group delivers innovative and cost-effective solutions, backed by a decade of industry experience.
                            Founded by a team of passionate entrepreneurs and supported by a skilled technical team, we're quickly becoming a trusted
                            partner for scientific and industrial needs.
                        </p>
                        <div className="flex items-center gap-4">
                            <Button size="lg" asChild>
                                <div className="inline-flex items-center gap-2">
                                    <a href="#contact-us" className="text-lg font-medium">
                                        Get a consultation
                                    </a>
                                    <ChevronsRightIcon />
                                </div>
                            </Button>
                            <Button variant="link" size="lg" asChild>
                                <a href="#expertise">Learn More</a>
                            </Button>
                        </div>
                    </div>
                    <div>
                        <img src="/images/hero-banner.webp" alt="Hero Image" className="h-full w-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}
