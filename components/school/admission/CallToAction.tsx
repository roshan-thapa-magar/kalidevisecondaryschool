import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground lg:px-16">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-medium">
            <GraduationCap className="h-4 w-4" />
            Admissions Open
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Begin Your Educational Journey Today
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/80">
            Join Kali Devi Secondary School and become part of a learning
            community dedicated to academic excellence, character development,
            leadership, and lifelong success.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              
              size="lg"
              variant="secondary"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>

            <Button
              
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/admission">
                Apply for Admission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}