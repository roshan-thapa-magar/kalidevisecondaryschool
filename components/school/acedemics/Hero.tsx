import { Button } from '@/components/ui/button'
import { ChevronRight, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <>
            <section className="relative h-[calc(100vh-64px)] min-h-[650px] overflow-hidden">
        {/* Background */}
        <Image
          src="/images/students.jpg"
          alt="Students studying at Kali Devi Secondary School"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/40" />

        {/* Decorative Blur */}
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_40%)]" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="max-w-3xl text-white">
              {/* Breadcrumb */}
              <div className="mb-6 flex items-center gap-2 text-sm text-white/80">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>Academics</span>
              </div>

              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
                <GraduationCap className="h-4 w-4" />
                Academic Excellence
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Academics
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/90 md:text-xl text-justify">
                We provide quality education through experienced teachers,
                student-centered learning, and a supportive environment that helps
                every learner achieve academic excellence and lifelong success.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg">
                  <Link href="/admission">Apply for Admission</Link>
                </Button>

                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white/15 text-white backdrop-blur hover:bg-white/25"
                >
                  <Link href="/contact">Contact School</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>
    </>
  )
}
