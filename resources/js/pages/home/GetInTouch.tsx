import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from '@inertiajs/react';

export function GetInTouch() {
    const form = useForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    return (
        <section id="contact-us" className="py-16">
            <div className="mx-auto max-w-6xl p-4">
                <h2 className="mb-8 text-4xl md:text-6xl">Get In Touch</h2>
                <p className="text-md leading-loose">
                    Whether you have questions about our products and services, need support, or want to discuss how we can assist with your
                    scientific and industrial needs, we are here to help. Reach out to us today and let's explore how we can work together to achieve
                    your goals.
                </p>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                        <Label>First Name</Label>
                        <Input
                            type="text"
                            placeholder="First Name"
                            className="mb-4"
                            value={form.data.firstName}
                            onChange={(e) => form.setData('firstName', e.target.value)}
                        />
                        <InputError message={form.errors.firstName} />
                    </div>
                    <div>
                        <Label>Last Name</Label>
                        <Input
                            type="text"
                            placeholder="Last Name"
                            className="mb-4"
                            value={form.data.lastName}
                            onChange={(e) => form.setData('lastName', e.target.value)}
                        />
                        <InputError message={form.errors.lastName} />
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            placeholder="Email"
                            className="mb-4"
                            value={form.data.email}
                            onChange={(e) => form.setData('email', e.target.value)}
                        />
                        <InputError message={form.errors.email} />
                    </div>
                    <div>
                        <Label>Phone</Label>
                        <Input
                            type="text"
                            placeholder="Phone"
                            className="mb-4"
                            value={form.data.phone}
                            onChange={(e) => form.setData('phone', e.target.value)}
                        />
                        <InputError message={form.errors.phone} />
                    </div>
                </div>
                <div className="mt-8">
                    <Label>Subject</Label>
                    <Input
                        type="text"
                        placeholder="Subject"
                        className="mb-4"
                        value={form.data.subject}
                        onChange={(e) => form.setData('subject', e.target.value)}
                    />
                    <InputError message={form.errors.subject} />
                </div>
                <div className="mt-8">
                    <Label>Message</Label>
                    <Textarea
                        placeholder="Your Message"
                        className="min-h-48"
                        cols={5}
                        value={form.data.message}
                        onChange={(e) => form.setData('message', e.target.value)}
                    />
                    <InputError message={form.errors.message} />
                </div>
                <div className="mt-8">
                    <Button
                        onClick={(e) => {
                            e.preventDefault();
                            form.post('/contact', {
                                onSuccess: () => form.reset(),
                            });
                        }}
                        disabled={form.processing}
                    >
                        {form.processing ? 'Sending...' : 'Send Message'}
                    </Button>
                </div>
            </div>
        </section>
    );
}
