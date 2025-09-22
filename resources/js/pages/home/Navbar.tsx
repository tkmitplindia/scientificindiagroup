import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ChevronsRightIcon, MenuIcon } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="mx-auto hidden max-w-6xl md:block">
                <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4">
                    <img src="/images/scientificindiagroup-logo.webp" alt="Scientific India Group Logo" className="mx-auto h-16 w-auto md:mx-0" />
                    <div className="col-span-2 flex items-center justify-center space-x-4">
                        <a href="#hero" className="text-sm font-medium hover:underline">
                            Home
                        </a>
                        <a href="/#about-us" className="text-sm font-medium hover:underline">
                            About Us
                        </a>
                        <a href="#expertise" className="text-sm font-medium hover:underline">
                            Expertise
                        </a>
                        <a href="#why-choose-us" className="text-sm font-medium hover:underline">
                            Why Choose Us
                        </a>
                        <a href="#faq" className="text-sm font-medium hover:underline">
                            FAQ
                        </a>
                    </div>
                    <div className="flex items-center justify-end space-x-4">
                        <Button size="lg" asChild>
                            <div className="inline-flex items-center gap-2">
                                <a href="#contact-us" className="text-lg font-medium">
                                    Get a consultation
                                </a>
                                <ChevronsRightIcon />
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between p-4 md:hidden">
                <img src="/images/scientificindiagroup-logo.webp" alt="Scientific India Group Logo" className="h-16 w-auto" />
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                    <SheetTrigger>
                        <MenuIcon />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetTitle className="sr-only">Scientific India Group</SheetTitle>
                        <SheetDescription className="sr-only">Mobile Menu</SheetDescription>
                        <div className="space-y-2 p-4">
                            <a href="#hero" className="block text-xl font-medium hover:underline" onClick={() => setMobileMenuOpen(false)}>
                                Home
                            </a>
                            <a href="/#about-us" className="block text-xl font-medium hover:underline" onClick={() => setMobileMenuOpen(false)}>
                                About Us
                            </a>
                            <a href="#expertise" className="block text-xl font-medium hover:underline" onClick={() => setMobileMenuOpen(false)}>
                                Expertise
                            </a>
                            <a href="#why-choose-us" className="block text-xl font-medium hover:underline" onClick={() => setMobileMenuOpen(false)}>
                                Why Choose Us
                            </a>
                            <a href="#faq" className="block text-xl font-medium hover:underline" onClick={() => setMobileMenuOpen(false)}>
                                FAQ
                            </a>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
}
