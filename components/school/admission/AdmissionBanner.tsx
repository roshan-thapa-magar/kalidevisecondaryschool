import { ArrowRight, FileText } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AdmissionBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-background py-24 lg:py-32">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 text-center">
        {/* Badge */}
        <Badge
          variant="outline"
          className="rounded-full border-primary/20 bg-primary/5 px-6 py-2 text-primary"
        >
          Admission Open
        </Badge>

        {/* Heading */}
        <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Start Your Child&apos;s Journey
          <br />
          With Us
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Give your child access to quality education, experienced teachers,
          and a supportive learning environment where every student can
          achieve academic excellence and personal growth.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" className="rounded-full px-8">
            Apply Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8"
          >
            <FileText className="mr-2 h-4 w-4" />
            Download Form
          </Button>
        </div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
    </section>
  );
}