import { Button } from '@/components/ui/button'
import React from 'react'

export default function CallToAction() {
  return (
    <>
      <section className="bg-muted py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Join Kali Devi Secondary School
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Become part of an institution committed to academic excellence,
            innovation, and holistic student development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-black hover:bg-white/90">
              Apply Now
            </Button>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  )
}
