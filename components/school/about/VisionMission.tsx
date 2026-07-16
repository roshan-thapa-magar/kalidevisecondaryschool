import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Eye, Target } from 'lucide-react'
import React from 'react'

export default function VisionMission() {
    return (
        <>
            <section className="py-20 lg:py-28 bg-muted/30" aria-label="Vision and mission">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Vision & Mission
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-muted-foreground">
                            Guided by strong values and a commitment to excellence, Kali Devi
                            Secondary School strives to inspire every student to learn, grow,
                            and contribute positively to society.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-8 lg:grid-cols-2">
                        {/* Vision */}
                        <Card className="border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <CardHeader>
                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                                    <Eye className="h-7 w-7 text-primary" />
                                </div>

                                <CardTitle className="text-2xl">Our Vision</CardTitle>

                                <CardDescription>
                                    Shaping confident learners and responsible citizens.
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                <p className="leading-8 text-muted-foreground">
                                    To become a leading educational institution that empowers
                                    students through quality education, innovation, discipline,
                                    and lifelong learning while nurturing responsible citizens who
                                    positively contribute to their community and the nation.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Mission */}
                        <Card className="border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <CardHeader>
                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                                    <Target className="h-7 w-7 text-primary" />
                                </div>

                                <CardTitle className="text-2xl">Our Mission</CardTitle>

                                <CardDescription>
                                    Providing quality education for every learner.
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                <ul className="space-y-4 text-muted-foreground">
                                    <li>• Deliver high-quality, student-centered education.</li>
                                    <li>• Encourage creativity, innovation, and critical thinking.</li>
                                    <li>• Build strong moral values, discipline, and leadership.</li>
                                    <li>• Foster a safe, inclusive, and supportive learning environment.</li>
                                    <li>• Prepare students for higher education and lifelong success.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}
