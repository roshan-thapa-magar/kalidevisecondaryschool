import Image from "next/image";
import Link from "next/link";
import { Clock3, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  "Available for all grades (ECD – Grade 10)",
  "Updated every academic session",
  "Easy PDF download",
];

export default function ClassRoutine() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium uppercase tracking-wider text-primary">
            Class Routine
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Weekly Class Schedule
          </h2>

          <p className="mt-4 text-muted-foreground">
            Stay updated with the latest class timetable for all grades.
            Students and parents can easily view or download the routine.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Content */}
          <Card>
            <CardHeader>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Clock3 className="h-7 w-7 text-primary" />
              </div>

              <CardTitle className="mt-4 text-2xl">
                Current Class Routine
              </CardTitle>

              <CardDescription>
                Academic Session 2083
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}

              <div className="flex gap-4 pt-4">
                <Button >
                  <Link href="/class-routine">View Routine</Link>
                </Button>

                <Button variant="outline" >
                  <Link href="/class-routine.pdf">Download PDF</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Image */}
          <Card className="overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/class-routine.jpg"
                alt="Class Routine"
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