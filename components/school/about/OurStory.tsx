import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function OurStory() {
    return (
        <>
            <section className="py-20 lg:py-28">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        {/* Image */}
                        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                            <Image
                                src="/images/about.jpg"
                                alt="Kali Devi Secondary School"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div >
                            <Badge
                                variant="outline"
                                className="rounded-full border-primary/20 bg-primary/5 px-4 py-1 uppercase tracking-[0.25em] "
                            >
                                Our Story
                            </Badge>

                            <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                                A Journey of
                                <br />
                                Learning & Excellence
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-muted-foreground text-justify">
                                Established in <strong>2060 B.S.</strong>, Kali Devi Secondary
                                School has been committed to providing quality education and
                                nurturing responsible citizens for our community. From humble
                                beginnings, the school has grown into a trusted institution that
                                inspires academic excellence, discipline, and lifelong learning.
                            </p>

                            <p className="mt-5 text-lg leading-8 text-muted-foreground text-justify">
                                Through the dedication of our teachers, support from parents, and
                                collaboration with the School Management Committee, we continue to
                                create a safe and inclusive environment where every student can
                                discover their potential and prepare confidently for the future.
                            </p>

                            <p className="mt-5 text-lg leading-8 text-muted-foreground text-justify">
                                Today, Kali Devi Secondary School proudly serves students from ECD
                                to Grade 10, combining quality education with extracurricular
                                activities, leadership development, and strong community values.
                            </p>

                            <Button className="mt-8" size="lg" >
                                <Link href="/admission">
                                    Join Our School
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
