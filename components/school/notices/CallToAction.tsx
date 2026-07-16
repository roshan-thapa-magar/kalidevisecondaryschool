import Link from "next/link";
import { ArrowRight, Bell } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground lg:px-16">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-medium">
            <Bell className="h-4 w-4" />
            Stay Connected
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Never Miss an Important Notice
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/80">
            Stay updated with the latest announcements, examination schedules,
            admissions, events, and official school notices from Kali Devi
            Secondary School.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
            >
              <Link href="/contact">
                Contact School
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/notices">
                View All Notices
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}