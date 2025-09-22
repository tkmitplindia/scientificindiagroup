import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface ExpertiseCardProps {
    image: string;
    title: string;
    description: string;
    dialog?: {
        heading: string;
        paragraph: string;
        items: string[];
    };
}

function ExpertiseCard({ image, title, description, dialog }: ExpertiseCardProps) {
    return (
        <div className="space-y-4">
            <img src={image} alt={title} className="mb-4 aspect-square w-full object-cover" />
            <h3 className="mb-2 text-xl font-semibold">{title}</h3>
            <p className="text-sm leading-loose">{description}</p>

            {dialog && (
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="cursor-pointer text-sm text-blue-500">Learn More</button>
                    </DialogTrigger>
                    <DialogContent className="w-2xl">
                        <DialogHeader>
                            <DialogTitle className="sr-only">{title}</DialogTitle>
                            <DialogDescription className="sr-only">{dialog.paragraph}</DialogDescription>
                        </DialogHeader>
                        <h3 className="mb-2 text-lg font-semibold">{dialog.heading}</h3>
                        <p className="text-sm leading-loose">{dialog.paragraph}</p>
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            {dialog.items.map((item, index) => (
                                <p key={index} className="text-sm text-muted-foreground">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
}

export function ExpertiseSection() {
    return (
        <section id="expertise" className="py-16">
            <div className="mx-auto max-w-6xl p-4">
                <h2 className="mb-8 text-4xl md:text-6xl">Our Expertise</h2>
                <p className="text-md leading-loose">
                    At Scientific India Group, we are more than just suppliers; we are partners in your scientific and industrial endeavors. Our deep
                    understanding of laboratory equipment calibration, maintenance, and the critical role of reliable industrial components allows us
                    to provide comprehensive solutions tailored to your specific needs.
                </p>

                <h3 className="mt-12 mb-6 text-3xl">Products</h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {products.map((item) => (
                        <ExpertiseCard key={item.title} image={item.img} title={item.title} description={item.desc} dialog={item.dialog} />
                    ))}
                </div>

                <h3 className="mt-12 mb-6 text-3xl">Services</h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {services.map((item) => (
                        <ExpertiseCard key={item.title} image={item.img} title={item.title} description={item.desc} dialog={item.dialog} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const products = [
    {
        title: 'Laboratory and Process Instruments',
        desc: 'High-quality instruments for laboratory and industrial processes.',
        img: '/images/products/Laboratory and Process Instruments.webp',
        dialog: {
            heading: 'Instruments that power discovery and process reliability',
            paragraph:
                'From bench-top analysis to robust process control, our portfolio covers routine to research-grade applications with installation, training, and calibration support.',
            items: [
                'Microscopes (optical & digital)',
                'pH / ORP meters',
                'Conductivity & TDS meters',
                'UV-Vis spectrophotometers',
                'Centrifuges (micro & clinical)',
                'Hotplate magnetic stirrers',
                'Incubators & shakers',
                'Autoclaves & sterilizers',
                'Fume hoods & biosafety cabinets',
                'Analytical & precision balances',
                'Single & multi-channel pipettes',
                'Water purification systems',
                'Refrigerators & -20/-80 °C freezers',
                'Drying & vacuum ovens',
                'Vortex mixers',
                'Data loggers & recorders',
            ],
        },
    },
    {
        title: 'Spares and Accessories',
        desc: 'Essential spares and accessories to keep your operations running smoothly.',
        img: '/images/products/Spares and Accessories.webp',
        dialog: {
            heading: 'OEM-grade spares for maximum uptime',
            paragraph:
                'We stock fast-moving consumables and critical replacement parts for lab instruments and production lines with quick turnaround and nationwide support.',
            items: [
                'O-rings, gaskets & seals',
                'Tubing & hose assemblies',
                'Inline & membrane filters',
                'Solenoid & control valves',
                'Power cords & adapters',
                'Fuses & circuit protection',
                'Bearings & couplings',
                'Nozzles & spray tips',
                'Electrical connectors & terminals',
                'Hose clamps & fittings',
                'Temperature & pressure sensors',
                'Limit switches & relays',
                'Replacement lamps & LEDs',
                'Pumps & diaphragms',
                'Grease, oils & maintenance kits',
                'Calibration/verification kits',
            ],
        },
    },
    {
        title: 'Certified Reference Materials',
        desc: 'Reliable reference materials for accurate and consistent results.',
        img: '/images/products/Certified Reference Materials.webp',
        dialog: {
            heading: 'Traceable standards for method validation and QA/QC',
            paragraph:
                'Achieve compliance and confidence with CRMs traceable to international standards, supplied with certificates and shelf-life guidance.',
            items: [
                'pH buffer solutions (NIST-traceable)',
                'Conductivity standards',
                'TOC standards',
                'ICP multi-element standards',
                'AAS single-element standards',
                'HPLC calibration mixes',
                'GC calibration standards',
                'Karl Fischer water standards',
                'Viscosity standards',
                'Density & refractive index standards',
                'UV-Vis absorbance standards',
                'FTIR polystyrene films',
                'Hardness reference blocks',
                'Particle size standards',
                'Microbiology control strains',
                'Titration standards (acid/base)',
            ],
        },
    },
];

const services = [
    {
        title: 'Field Trial Services',
        desc: 'On-site testing and evaluation to ensure optimal performance.',
        img: '/images/products/Field Trial Services.webp',
        dialog: {
            heading: 'Real-world testing for reliable results',
            paragraph:
                'Our field trial services are designed to validate products and processes under actual operating conditions. By simulating real-world environments, we ensure performance, safety, and compliance standards are consistently met.',
            items: [
                'On-site evaluation of products',
                'Performance benchmarking',
                'Validation of lubricant properties',
                'Wear analysis',
                'Fuel efficiency studies',
                'Emission testing',
                'Temperature and pressure profiling',
                'Durability assessments',
                'Vibration and noise monitoring',
                'Component stress testing',
                'Failure mode analysis',
                'Environmental impact studies',
                'Compliance with industry standards',
                'Data logging and reporting',
                'Optimization recommendations',
                'Post-trial support and consultation',
            ],
        },
    },
    {
        title: 'Calibration Services',
        desc: 'Precise calibration to maintain the accuracy of your instruments.',
        img: '/images/products/Calibration Services.webp',
        dialog: {
            heading: 'Ensuring measurement accuracy and compliance',
            paragraph:
                'Our calibration services help maintain instrument accuracy, compliance with regulatory standards, and reliability in daily operations. Every calibration is performed using certified reference materials and traceable methods.',
            items: [
                'ISO-certified calibration procedures',
                'Electrical equipment calibration',
                'Temperature sensor calibration',
                'Pressure gauge calibration',
                'Flow meter calibration',
                'Viscosity instrument calibration',
                'Spectrophotometer calibration',
                'Balances and scales calibration',
                'Multimeter calibration',
                'Pipette calibration',
                'pH and conductivity meter calibration',
                'Torque tool calibration',
                'Customized calibration schedules',
                'On-site calibration support',
                'Calibration certificates provided',
                'Compliance with NIST/ISO standards',
            ],
        },
    },
    {
        title: 'Maintenance and Breakdown Services',
        desc: 'Comprehensive support to minimize downtime and ensure reliability.',
        img: '/images/products/Maintenance and Breakdown Services.webp',
        dialog: {
            heading: 'Proactive care and quick recovery',
            paragraph:
                'We provide preventive maintenance and rapid breakdown services to keep your equipment running smoothly. Our expert team ensures minimal downtime, reduced costs, and reliable operations through proactive care and fast response.',
            items: [
                'Preventive maintenance programs',
                'Emergency breakdown response',
                'Spare parts replacement',
                'Routine inspections',
                'Lubrication and cleaning',
                'Component alignment and adjustment',
                'Electrical system checks',
                'Hydraulic and pneumatic system service',
                'Software and firmware updates',
                'Failure diagnostics',
                'Root cause analysis',
                'Performance optimization',
                'Safety compliance checks',
                'Service history documentation',
                'Operator training support',
                '24/7 technical assistance',
            ],
        },
    },
];
