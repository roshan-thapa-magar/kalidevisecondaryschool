import Image from "next/image";
import Link from "next/link";
import { CalendarDays, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const calendarFeatures = [
  "School Opening Day",
  "First Terminal Examination",
  "Second Terminal Examination",
  "Final Examination",
  "Public Holidays & Vacations",
  "Annual Sports & Cultural Program",
];

export default function AcademicCalendar() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium uppercase tracking-wider text-primary">
            Academic Calendar
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Important Academic Dates
          </h2>

          <p className="mt-4 text-muted-foreground">
            Stay informed about the school's academic schedule, including
            important events, examinations, holidays, admissions, and other key
            dates throughout the academic year.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Content */}
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <CalendarDays className="h-7 w-7 text-primary" />
              </div>

              <CardTitle className="mt-4 text-2xl">
                Academic Session 2083
              </CardTitle>

              <CardDescription>
                Key dates for students, parents, and teachers.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
              {calendarFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}

              <div className="flex flex-wrap gap-4 pt-4">
                <Button>
                  <Link href="/calendar">View Calendar</Link>
                </Button>

                <Button variant="outline">
                  <Link href="/calendar.pdf">Download PDF</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Image */}
          <Card className="overflow-hidden border-border/60 shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/academic-calendar.jpg"
                alt="Academic Calendar"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}