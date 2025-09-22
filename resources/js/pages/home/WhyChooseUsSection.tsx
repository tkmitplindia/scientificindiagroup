interface WhyUsCardProps {
    title: string;
    description: string;
}

function WhyUsCard({ title, description }: WhyUsCardProps) {
    return (
        <div className="space-y-4">
            <h3 className="mb-2 text-xl font-semibold">{title}</h3>
            <p className="text-sm leading-loose">{description}</p>
        </div>
    );
}

export function WhyChooseUsSection() {
    return (
        <section id="why-choose-us" className="py-16">
            <div className="mx-auto max-w-6xl p-4">
                <h2 className="mb-8 text-4xl md:text-6xl">Why Us</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                        <p className="text-md leading-loose">
                            Scientific Solutions and Services in a short span of time have proved our existence in the industry, competing with the
                            movers & shakers, and thus becoming one in the process. The company is founded by three ambitious aspiring entrepreneurs,
                            with over decade-long experience in the service and production industry. Their expertise is backed by a competent
                            technical team committed to offer innovative yet cost-efficient solutions and services
                        </p>
                    </div>
                    <div>
                        <div className="space-y-8">
                            {POINTS.map((point) => (
                                <WhyUsCard key={point.title} title={point.title} description={point.description} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const POINTS = [
    {
        title: 'Whole-hearted commitment to your business',
        description: 'We prioritize your business needs and work diligently to provide solutions that drive your success.',
    },
    {
        title: 'Your business, our expertise!',
        description: 'Expertise in diverse industries, delivering tailored solutions with proficiency.',
    },
    {
        title: 'Reliability is our core business mantra',
        description: 'Dependable services and products that you can trust for your critical operations.',
    },
];
