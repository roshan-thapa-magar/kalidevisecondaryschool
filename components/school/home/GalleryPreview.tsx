import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SectionHeader = ({
  badge,
  title,
  description
}: {
  badge: string;
  title: string;
  description: string;
}) => (
  <div className="mx-auto mb-14 max-w-3xl text-center">
    <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/5 px-4 py-1 uppercase tracking-[0.25em] text-primary">
      {badge}
    </Badge>
    <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    <p className="mt-5 text-lg leading-8 text-muted-foreground">
      {description}
    </p>
  </div>
);


const galleryImages = [
  { id: 1, src: "/images/gallery/a.jpg", alt: "School Event" },
  { id: 2, src: "/images/gallery/b.jpg", alt: "Students Learning" },
  { id: 3, src: "/images/gallery/c.jpg", alt: "Sports Activities" },
  { id: 4, src: "/images/gallery/d.jpg", alt: "Cultural Program" },
];

export default function GalleryPreview() {
  return (
    <>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Gallery"
            title="Gallery Preview"
            description="Explore memorable moments from school activities, celebrations, academic programs, sports events, and school life."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width:768px) 100vw, 25vw"
                  className="object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Button size="lg">
              <Link href="/gallery" className="flex items-center">
                <span>View Full Gallery</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
