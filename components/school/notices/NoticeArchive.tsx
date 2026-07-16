import Link from "next/link";
import { Archive, ArrowRight, CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const archives = [
  {
    id: 1,
    month: "July 2026",
    total: 18,
  },
  {
    id: 2,
    month: "June 2026",
    total: 24,
  },
  {
    id: 3,
    month: "May 2026",
    total: 15,
  },
  {
    id: 4,
    month: "April 2026",
    total: 20,
  },
  {
    id: 5,
    month: "March 2026",
    total: 17,
  },
  {
    id: 6,
    month: "February 2026",
    total: 13,
  },
];

function ArchiveCard({
  month,
  total,
}: {
  month: string;
  total: number;
}) {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
            <Archive className="h-7 w-7 text-primary" />
          </div>

          <div>
            <h3 className="text-lg font-semibold">{month}</h3>

            <p className="text-sm text-muted-foreground">
              {total} Notices
            </p>
          </div>
        </div>

        <Button variant="outline" size="sm" >
          <Link href={`/notices/archive?month=${encodeURIComponent(month)}`}>
            View
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function NoticeArchive() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium uppercase tracking-wider text-primary">
            Notice Archive
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Browse Previous Notices
          </h2>

          <p className="mt-4 text-muted-foreground">
            Find notices from previous months, including academic updates,
            examination schedules, admissions, and school announcements.
          </p>
        </div>

        {/* Archive List */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {archives.map((archive) => (
            <ArchiveCard
              key={archive.id}
              month={archive.month}
              total={archive.total}
            />
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-12 text-center">
          <Button size="lg" >
            <Link href="/notices/archive">
              <CalendarDays className="mr-2 h-5 w-5" />
              View Complete Archive
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}