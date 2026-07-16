import Image from 'next/image'
import React from 'react'
const stats = [
  { id: 1, value: "20+", label: "Qualified Teachers" },
  { id: 2, value: "500+", label: "Active Students" },
  { id: 3, value: "ECD–10", label: "Academic Levels" },
  { id: 4, value: "100%", label: "Student Support" },
];
export default function AcademicOverview() {
    const StatCard = ({ value, label }: { value: string; label: string }) => (
        <div>
            <h3 className="text-4xl font-bold text-primary">{value}</h3>
            <p className="mt-2 text-muted-foreground">{label}</p>
        </div>
    );
    return (
        <>
            <section className="py-20 lg:py-28 bg-muted">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        {/* Left Content */}
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                                Academic Overview
                            </p>

                            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                                Inspiring Learning,
                                <br />
                                Building Bright Futures
                            </h2>

                            <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground text-justify">
                                <p>
                                    Kali Devi Secondary School is committed to providing a high-quality,
                                    student-centered education that nurtures academic excellence,
                                    creativity, discipline, and lifelong learning. Our dedicated teachers
                                    create an engaging classroom environment where every student is
                                    encouraged to think critically, solve problems confidently, and reach
                                    their full potential.
                                </p>

                                <p>
                                    We follow the National Curriculum of Nepal while integrating practical
                                    learning, extracurricular activities, and modern teaching methods to
                                    prepare students for higher education and responsible citizenship.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-2 gap-6">
                                {stats.map((stat) => (
                                    <StatCard key={stat.id} value={stat.value} label={stat.label} />
                                ))}
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative overflow-hidden rounded-3xl">
                            <div className="relative aspect-[4/5]">
                                <Image
                                    src="/images/academics.jpg"
                                    alt="Students learning in the classroom"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
