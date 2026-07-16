import { HeroSection } from '@/components/marketing/hero-section';
import React from 'react';

export default function schoolLife() {
    return (
        <>
            <HeroSection
                badge="Explore"
                title="Life At KDSS"
                image="/images/school.jpg"
                description={[
                    "Beginning your learning journey at Kali Devi Secondary School is a meaningful experience filled with knowledge, discovery, friendship, and personal growth.",
                    "We provide a supportive learning environment where students develop academic excellence, creativity, discipline, and confidence to prepare for future opportunities.",
                    "Through experienced teachers, modern facilities, extracurricular activities, and community values, we help students become responsible and successful citizens.",
                ]}
                primaryButton={{
                    label: "Explore School",
                    href: "/about",
                }}
            />
        </>
    )
}