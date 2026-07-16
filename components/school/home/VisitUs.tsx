import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Clock, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
const contactInfo = [
    { id: 1, icon: MapPin, title: "Address", content: "Kali Devi Secondary School\nGorkha, Nepal" },
    { id: 2, icon: Phone, title: "Phone", content: "+977-98XXXXXXXX" },
    { id: 3, icon: Mail, title: "Email", content: "info@kdss.edu.np" },
    { id: 4, icon: Clock, title: "Office Hours", content: "Sunday – Friday\n10:00 AM – 4:00 PM" },
];
export default function VisitUs() {

    const SectionHeader = ({
        badge,
        title,
        description
    }: {
        badge: string;
        title: string;
        description: string;
    }) => (
        <div className="mx-auto mb-14 max-w-3xl text-center">
            <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/5 px-4 py-1 uppercase tracking-[0.25em] text-primary">
                {badge}
            </Badge>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
                {description}
            </p>
        </div>
    );

    const ContactItem = ({ icon: Icon, title, content }: { icon: any; title: string; content: string }) => (
        <div className="flex items-start gap-4">
            <Icon className="mt-1 h-6 w-6 text-primary" />
            <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-muted-foreground whitespace-pre-line">{content}</p>
            </div>
        </div>
    );
    return (
        <>
            <section className="bg-muted/30 py-20 lg:py-28">
                <div className="container mx-auto max-w-7xl px-6">
                    <SectionHeader
                        badge="Contact Us"
                        title="Visit Our School"
                        description="We'd love to welcome you to Kali Devi Secondary School. Visit our school or contact us for admissions and general inquiries."
                    />
                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Google Map */}
                        <div className="overflow-hidden rounded-2xl border">
                            <iframe
                                src="YOUR_GOOGLE_MAP_EMBED_URL"
                                width="100%"
                                height="500"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                className="border-0"
                            />
                        </div>

                        {/* Contact Information */}
                        <Card>
                            <CardContent className="space-y-8 p-8">
                                {contactInfo.map((item) => (
                                    <ContactItem key={item.id} {...item} />
                                ))}
                                <Button size="lg">
                                    <Link href="/contact" className="flex items-center">
                                        <span>Contact Us</span>
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}
