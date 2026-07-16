import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bus, FlaskConical, Library, Monitor, ShieldCheck, Volleyball } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
  const facilities = [
    {
      id: 1,
      title: "Library",
      description:
        "A well-stocked library that encourages reading, research, and lifelong learning.",
      icon: Library,
      image: "/images/facilities/library.jpg",
      alt: "School library with bookshelves and reading area",
    },
    {
      id: 2,
      title: "Computer Lab",
      description:
        "Modern computers and internet access help students develop digital literacy and technical skills.",
      icon: Monitor,
      image: "/images/facilities/computer.jpg",
      alt: "Students working on computers in the lab",
    },
    {
      id: 3,
      title: "Science Laboratory",
      description:
        "Practical experiments allow students to explore scientific concepts through hands-on learning.",
      icon: FlaskConical,
      image: "/images/facilities/science.jpg",
      alt: "Science laboratory with equipment and students conducting experiments",
    },
    {
      id: 4,
      title: "Sports & Playground",
      description:
        "Spacious playgrounds encourage sports, teamwork, fitness, and extracurricular activities.",
      icon: Volleyball,
      image: "/images/facilities/playground.jpg",
      alt: "School playground with students playing sports",
    },
    {
      id: 5,
      title: "Transportation",
      description:
        "Safe and reliable transportation services for students from nearby communities.",
      icon: Bus,
      image: "/images/facilities/bus.jpg",
      alt: "School bus parked at the campus",
    },
    {
      id: 6,
      title: "Safe Campus",
      description:
        "A secure, clean, and student-friendly campus that promotes learning and personal growth.",
      icon: ShieldCheck,
      image: "/images/facilities/campus.jpg",
      alt: "Safe and clean school campus environment",
    },
  ];
export default function Facilities() {
  return (
    <>
      <section className=" py-20 lg:py-28" aria-label="School facilities">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              School Facilities
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              We provide modern facilities that support academic excellence,
              creativity, physical development, and a safe learning environment
              for every student.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => {
              const IconComponent = facility.icon;
              return (
                <Card
                  key={facility.id}
                  className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-52">
                    <Image
                      src={facility.image}
                      alt={facility.alt}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>

                    <CardTitle className="mt-4">{facility.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground leading-7">
                      {facility.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  )
}
