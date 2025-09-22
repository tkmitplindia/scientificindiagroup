export function AboutUsSection() {
    return (
        <section id="about-us" className="py-16">
            <div className="mx-auto max-w-6xl p-4">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                    <div>
                        <img src="/images/about-us-banner.webp" alt="About Us" className="w-full object-cover" />
                    </div>
                    <div>
                        <h2 className="mb-8 text-4xl md:text-6xl">About Us</h2>
                        <p className="text-md leading-loose">
                            At Scientific India Group, we are committed to transcending boundaries and transforming businesses through innovative
                            scientific solutions. Founded by experienced entrepreneurs with decades of expertise in service and production, our
                            company has grown into a trusted partner for organizations across biotechnology, pharmaceuticals, life sciences,
                            forensics, nanosciences, petroleum, and more
                        </p>
                        <p className="text-md mt-4 leading-loose">
                            Our vision is to be recognized as an industry leader in trading and contracting, known for innovation, excellence, and
                            unwavering commitment to client success. With an expanding presence across India, Scientific India Group is determined to
                            create mutual growth for our clients, trade partners, and associates
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
