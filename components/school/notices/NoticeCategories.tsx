import {
  Bell,
  ClipboardList,
  GraduationCap,
  Trophy,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    title: "General Notices",
    description: "Important school announcements and updates.",
    count: 12,
    icon: Bell,
  },
  {
    id: 2,
    title: "Academic Notices",
    description: "Class updates, routines, and academic information.",
    count: 8,
    icon: GraduationCap,
  },
  {
    id: 3,
    title: "Examination Notices",
    description: "Exam schedules, results, and guidelines.",
    count: 15,
    icon: ClipboardList,
  },
  {
    id: 4,
    title: "Events & Programs",
    description: "School events, competitions, and activities.",
    count: 6,
    icon: Trophy,
  },
];

function CategoryCard({
  title,
  description,
  count,
  icon: Icon,
}: {
  title: string;
  description: string;
  count: number;
  icon: React.ElementType;
}) {
  return (
    <Card className="cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <Icon className="text-primary" size={32} />

          <Badge variant="secondary" className="rounded-full">
            {count}
          </Badge>
        </div>

        <h3 className="mt-4 text-lg font-semibold">
          {title}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

export default function NoticeCategories() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold">
            Browse by Category
          </h2>

          <p className="mt-2 text-muted-foreground">
            Find notices based on their category.
          </p>
        </div>

        {/* Categories */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              count={category.count}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}