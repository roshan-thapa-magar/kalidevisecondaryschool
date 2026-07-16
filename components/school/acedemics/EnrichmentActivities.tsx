import {
  BookOpen,
  Brain,
  Microscope,
  Presentation,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const enrichmentActivities = [
  {
    id: 1,
    title: "Quiz Competitions",
    description:
      "Encouraging knowledge sharing, quick thinking, and healthy academic competition.",
    icon: Brain,
  },
  {
    id: 2,
    title: "Science Projects",
    description:
      "Promoting innovation through experiments, research, and practical demonstrations.",
    icon: Microscope,
  },
  {
    id: 3,
    title: "Reading & Writing",
    description:
      "Building language skills through reading clubs, writing activities, and presentations.",
    icon: BookOpen,
  },
  {
    id: 4,
    title: "Debate & Presentation",
    description:
      "Developing communication skills, confidence, and leadership qualities.",
    icon: Presentation,
  },
];

function ActivityCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          <Icon className="h-7 w-7 text-primary" />
        </div>

        <CardTitle className="mt-4">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="leading-7 text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

export default function EnrichmentActivities() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium uppercase tracking-wider text-primary">
            Extracurricular Activities
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Academic Enrichment Activities
          </h2>

          <p className="mt-4 text-muted-foreground">
            Beyond classroom learning, we provide various academic activities
            that develop creativity, confidence, teamwork, and problem-solving
            skills among students.
          </p>
        </div>

        {/* Activity Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {enrichmentActivities.map((activity) => (
            <ActivityCard
              key={activity.id}
              title={activity.title}
              description={activity.description}
              icon={activity.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}