import { cn } from '@/lib/utils';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';

interface FaqCardProps {
    title: string;
    body: string;
}

function FaqCard({ title, body }: FaqCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="cursor-pointer space-y-4 py-8" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center justify-between">
                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                {isOpen ? <MinusIcon /> : <PlusIcon />}
            </div>
            <div className={cn('overflow-hidden transition-all duration-500', isOpen ? 'max-h-96' : 'max-h-0')}>
                <p className="text-sm leading-loose">{body}</p>
            </div>
        </div>
    );
}

export function FaqSection() {
    return (
        <section id="faq" className="py-16">
            <div className="mx-auto max-w-6xl p-4">
                <h2 className="mb-8 text-4xl md:text-6xl">FAQs</h2>
                <div className="space-y-4 divide-y">
                    {FAQS.map((faq) => (
                        <FaqCard key={faq.title} title={faq.title} body={faq.body} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const FAQS = [
    {
        title: 'What does Scientific India Group specialize in?',
        body: 'Scientific India Group provides end-to-end solutions in laboratory instruments, scientific equipment, and consumables. We cater to industries such as pharmaceuticals, biotechnology, healthcare, education, and research institutions.',
    },
    {
        title: 'Who are your key clients?',
        body: 'Our clients include universities, hospitals, pharmaceutical companies, biotech firms, and government research organizations that rely on us for high-quality instruments and reliable support.',
    },
    {
        title: 'Do you provide after-sales support?',
        body: 'Yes, we offer comprehensive after-sales support including installation, training, preventive maintenance, and service contracts to ensure smooth operations of all equipment supplied.',
    },
    {
        title: 'Where is Scientific India Group located?',
        body: 'We are based in India with a wide presence across major cities, enabling us to serve clients throughout the country with efficient logistics and timely support.',
    },
    {
        title: 'Can Scientific India Group provide customized solutions?',
        body: 'Absolutely. We work closely with clients to understand their specific needs and offer customized solutions in terms of instruments, consumables, and integrated lab setups.',
    },
];
