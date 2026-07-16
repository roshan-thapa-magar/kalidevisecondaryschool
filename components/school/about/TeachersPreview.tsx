import TeacherCard from '@/components/TeacherCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
  const teachers = [
    {
      id: 1,
      name: "Mr. Baburam Tamang",
      designation: "Principal",
      image: "/images/principal.png",
      badge: "Principal",
    },
    {
      id: 2,
      name: "Karuna Ale Magar",
      designation: "Science Teacher",
      image: "/images/gudiya.png",
      badge: "Teacher",
    },
    {
      id: 3,
      name: "Roshan Thapa Magar",
      designation: "Mathematics Teacher",
      image: "/images/roshan.png",
      badge: "Teacher",
    },
    {
      id: 4,
      name: "Karuna Gurung",
      designation: "English Teacher",
      image: "/images/madam.png",
      badge: "Teacher",
    },
  ];
export default function TeachersPreview() {
  return (
    <>
            <section className="py-20 lg:py-28 bg-muted/30" aria-label="Our teachers">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Section Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Meet Our Dedicated Teachers
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Our passionate educators are committed to inspiring students
              through quality education, guidance, and lifelong learning.
            </p>
          </div>

          {/* Teachers Grid */}
          <div className="grid justify-items-center gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {teachers.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                name={teacher.name}
                designation={teacher.designation}
                image={teacher.image}
                badge={teacher.badge}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-14 flex justify-center">
            <Button size="lg" >
              <Link href="/teachers">View All Teachers</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
