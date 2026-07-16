import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, HeartHandshake, Lightbulb, ShieldCheck, Trophy, Users } from 'lucide-react';
import React from 'react'
const coreValues = [
    {
      id: 1,
      title: "Academic Excellence",
      description: "Striving for the highest standards in teaching and learning.",
      icon: BookOpen,
    },
    {
      id: 2,
      title: "Respect",
      description: "Treating everyone with kindness, dignity, and compassion.",
      icon: HeartHandshake,
    },
    {
      id: 3,
      title: "Integrity",
      description: "Promoting honesty, responsibility, and ethical behavior.",
      icon: ShieldCheck,
    },
    {
      id: 4,
      title: "Innovation",
      description: "Encouraging creativity, curiosity, and lifelong learning.",
      icon: Lightbulb,
    },
    {
      id: 5,
      title: "Community",
      description: "Building strong partnerships among students, parents, and teachers.",
      icon: Users,
    },
    {
      id: 6,
      title: "Leadership",
      description: "Developing confident, responsible, and future-ready leaders.",
      icon: Trophy,
    },
  ];
export default function CoreValues() {
  return (
    <>
            <section className="py-20 lg:py-28" aria-label="Core values">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Core Values
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              At Kali Devi Secondary School, our values guide every decision,
              inspire every learner, and build a strong foundation for lifelong
              success.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <Card
                key={value.id}
                className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>

                  <CardTitle className="mt-4">{value.title}</CardTitle>

                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
