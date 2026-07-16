import TeacherCard from '@/components/TeacherCard'
import React from 'react'

export default function PrincipalMessage() {
    return (
        <>
            <section className="py-16 lg:py-24 bg-muted/30" aria-label="Principal's message">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* Image */}
                        <TeacherCard
                            name="Mr. Baburam Tamang"
                            designation="Principal"
                            image="/images/principal.png"
                        />

                        {/* Content */}
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                                Principal's Message
                            </p>

                            <h2 className="mt-4 mb-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                                Message from
                                <br />
                                the Principal
                            </h2>

                            <div className="space-y-5 text-base leading-8 text-muted-foreground lg:text-lg lg:leading-9 text-justify">
                                <p >
                                    Welcome to Kali Devi Secondary School. We believe every child
                                    has unique talents and unlimited potential. Our mission is to
                                    provide quality education in a caring, disciplined, and
                                    inspiring environment.
                                </p>

                                <p >
                                    Our experienced teachers encourage curiosity, creativity, and
                                    critical thinking while nurturing strong moral values and
                                    lifelong learning habits. We work closely with parents to
                                    support every student's academic and personal growth.
                                </p>

                                <p >
                                    Together, let us continue building a school community where
                                    every learner is empowered to achieve success and become a
                                    responsible citizen of the future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
