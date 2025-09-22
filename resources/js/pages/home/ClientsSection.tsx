import { Marquee, MarqueeContent, MarqueeItem } from '@/components/ui/shadcn-io/marquee';

export function ClientsSection() {
    return (
        <section id="clients" className="mx-auto max-w-6xl space-y-4 p-4">
            <h2 className="text-md text-center font-bold">Join in our ever growing client list</h2>
            <Marquee>
                <MarqueeContent>
                    <MarqueeItem className="h-32 w-32">
                        <img src="/images/clients/image 1.png" alt="Client 1" className="h-12 object-contain" />
                    </MarqueeItem>
                    <MarqueeItem className="h-32 w-32">
                        <img src="/images/clients/image 2.png" alt="Client 2" className="h-12 object-contain" />
                    </MarqueeItem>
                    <MarqueeItem className="h-32 w-32">
                        <img src="/images/clients/image 3.png" alt="Client 3" className="h-12 object-contain" />
                    </MarqueeItem>
                    <MarqueeItem className="h-32 w-32">
                        <img src="/images/clients/image 4.png" alt="Client 4" className="h-12 object-contain" />
                    </MarqueeItem>
                    <MarqueeItem className="h-32 w-32">
                        <img src="/images/clients/image 5.png" alt="Client 5" className="h-12 object-contain" />
                    </MarqueeItem>
                    <MarqueeItem className="h-32 w-32">
                        <img src="/images/clients/image 6.png" alt="Client 6" className="h-12 object-contain" />
                    </MarqueeItem>
                </MarqueeContent>
            </Marquee>
        </section>
    );
}
