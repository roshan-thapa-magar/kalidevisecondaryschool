import React from 'react'

export default function WhyChooseUs() {
    const strengths = [
        { id: 1, emoji: "📚", title: "Quality Education", description: "Modern teaching methods focused on student learning." },
        { id: 2, emoji: "👨‍🏫", title: "Qualified Teachers", description: "Dedicated teachers committed to student success." },
        { id: 3, emoji: "⚽", title: "Sports & Activities", description: "Encouraging physical fitness and teamwork through extracurricular activities." },
        { id: 4, emoji: "🏫", title: "Safe Environment", description: "Clean school with supportive learning atmosphere." },
    ];
    return (
        <>
            <section className="py-24 bg-muted">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="text-center mb-14">
                        <p className="uppercase font-semibold text-primary">Our Strengths</p>
                        <h2 className="mt-3 text-4xl font-bold">Why Choose Our School</h2>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {strengths.map((item) => (
                            <div key={item.id} className="rounded-xl border p-8 text-center">
                                <div className="mb-5 text-5xl">{item.emoji}</div>
                                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
