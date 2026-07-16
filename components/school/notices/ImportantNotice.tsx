import { Megaphone, CalendarDays, Bell, ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const importantNotice = {
  title: "SEE Examination Schedule Published",
  date: "July 10, 2026",
  category: "Examination",
  description:
    "The SEE examination routine has been published. Students are requested to check the schedule.",
};

export default function ImportantNotice() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            {/* Content */}
            <div>
              <div className="flex items-center gap-2 text-primary">
                <Megaphone size={22} />

                <span className="font-semibold">
                  Important Notice
                </span>

                <Badge
                  variant="destructive"
                  className="ml-2 animate-pulse"
                >
                  New
                </Badge>
              </div>

              <h2 className="mt-3 text-2xl font-bold">
                {importantNotice.title}
              </h2>

              <p className="mt-2 text-muted-foreground">
                {importantNotice.description}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays size={16} />

                <span>{importantNotice.date}</span>

                <span>•</span>

                <Badge variant="outline">
                  {importantNotice.category}
                </Badge>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <Button>
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button variant="outline">
                <Bell className="mr-2 h-4 w-4" />
                Get Reminder
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}