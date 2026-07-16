import TeacherCard from '@/components/TeacherCard'
import { Badge } from '@/components/ui/badge'
import React from 'react'

export default function ChairpersonMessage() {
  return (
    <>
            <section
        className="py-16 lg:py-24"
        aria-label="Chairperson's message"
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}
            <div>
              <Badge
                variant="outline"
                className="rounded-full border-primary/20 bg-primary/5 px-4 py-1 uppercase tracking-[0.25em] text-primary"
              >
                School Management Committee
              </Badge>

              <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Message from
                <br />
                the Chairperson
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground lg:text-lg lg:leading-9 text-justify">
                <p>
                  On behalf of the School Management Committee, I warmly welcome
                  all students, parents, teachers, and visitors to Kali Devi
                  Secondary School.
                </p>

                <p>
                  Our committee is committed to strengthening academic
                  excellence, improving school facilities, and ensuring that
                  every student receives quality education in a safe and
                  supportive environment.
                </p>

                <p>
                  With the cooperation of teachers, parents, and the community,
                  we continue to build an institution that prepares students
                  with knowledge, leadership, discipline, and strong ethical
                  values for the future.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <TeacherCard
                name="Khum Bahadur Thapa Magar"
                designation="Chairperson"
                image="/images/Chairperson.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
