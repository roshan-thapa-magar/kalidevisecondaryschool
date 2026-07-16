import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Clock,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const notices = [
  {
    id: 1,
    title: "SEE Examination Schedule Published",
    date: "July 10, 2026",
    category: "Examination",
    description:
      "The SEE examination routine has been published. Students are requested to check the schedule.",
    isImportant: true,
  },
  {
    id: 2,
    title: "Admission Open for New Academic Session",
    date: "July 05, 2026",
    category: "Admission",
    description:
      "Admissions are open for Grade Nursery to Grade 9. Apply before the deadline.",
    isImportant: true,
  },
  {
    id: 3,
    title: "Parent Teacher Meeting Notice",
    date: "June 25, 2026",
    category: "General",
    description:
      "Parents are invited to attend the upcoming interaction program with teachers.",
    isImportant: false,
  },
  {
    id: 4,
    title: "Annual Sports Program Announcement",
    date: "June 15, 2026",
    category: "Events",
    description:
      "Students are encouraged to participate in various sports activities.",
    isImportant: false,
  },
  {
    id: 5,
    title: "Mid-Term Examination Schedule",
    date: "June 10, 2026",
    category: "Examination",
    description:
      "Mid-term examinations for Grade 1–10 will begin from next week.",
    isImportant: false,
  },
  {
    id: 6,
    title: "School Closed for Summer Vacation",
    date: "June 01, 2026",
    category: "General",
    description:
      "School will remain closed for summer vacation from June 15 to July 1.",
    isImportant: false,
  },
];

function NoticeCard({
  notice,
}: {
  notice: (typeof notices)[0];
}) {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Examination: "bg-blue-500/10 text-blue-600 border-blue-200",
      Admission: "bg-green-500/10 text-green-600 border-green-200",
      General: "bg-gray-500/10 text-gray-600 border-gray-200",
      Events: "bg-purple-500/10 text-purple-600 border-purple-200",
    };

    return colors[category] || "bg-primary/10 text-primary";
  };

  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <Badge
              className={`${getCategoryColor(
                notice.category
              )} border`}
            >
              {notice.category}
            </Badge>

            {notice.isImportant && (
              <Badge
                variant="destructive"
                className="animate-pulse"
              >
                Important
              </Badge>
            )}
          </div>

          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            {notice.date}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold">
          {notice.title}
        </h3>

        <p className="mt-2 text-muted-foreground">
          {notice.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Button variant="outline" size="sm">
            View Notice
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {notice.isImportant && (
            <Button size="sm">
              <Bell className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function LatestNotices() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10 flex flex-wrap items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Latest Notices
            </h2>

            <p className="mt-2 text-muted-foreground">
              Recent announcements and updates from the school.
            </p>
          </div>

          <Button
            variant="outline"
            className="mt-4 sm:mt-0"
          >
            <Clock className="mr-2 h-4 w-4" />
            View All
          </Button>
        </div>

        {/* Notices */}
        <div className="grid gap-6 md:grid-cols-2">
          {notices.map((notice) => (
            <NoticeCard
              key={notice.id}
              notice={notice}
            />
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-10 text-center">
          <Button size="lg" >
            <Link href="/notices">
              Load More Notices
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}