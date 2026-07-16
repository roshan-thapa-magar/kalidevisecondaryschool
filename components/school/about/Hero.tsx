import { HeroSection } from '@/components/marketing/hero-section'
import React from 'react'

export default function Hero() {
    return (
        <>
            <HeroSection
                badge="About"
                title="Kali Devi Secondary School"
                image="/images/aboutpage.jpg"
                description={[
                    "Kali Devi Secondary School is committed to providing quality education that inspires students to achieve academic excellence while developing strong moral values, creativity, discipline, and confidence. We believe every student deserves a safe, inclusive, and supportive environment where they can discover their talents and reach their full potential.",
                    "Our experienced teachers, modern learning resources, and student-centered teaching approach encourage curiosity, critical thinking, and lifelong learning. Alongside classroom education, students actively participate in sports, cultural activities, leadership programs, and community service to build essential life skills.",
                ]}
                primaryButton={{
                    label: "Home",
                    href: "/",
                }}
                secondaryButton={{
                    label: "Admission",
                    href: "/admission",
                }}
            />
        </>
    )
}
