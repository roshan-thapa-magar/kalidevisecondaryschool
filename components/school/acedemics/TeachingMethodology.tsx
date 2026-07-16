import {
  BookOpen,
  Lightbulb,
  MonitorSmartphone,
  Users,
} from "lucide-react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const teachingMethods = [
  {
    id: 1,
    title: "Interactive Learning",
    description:
      "Engaging classroom activities, discussions, and teamwork to improve understanding.",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Practical Education",
    description:
      "Learning through experiments, projects, and real-life applications.",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "Technology-Based Learning",
    description:
      "Using digital tools and modern resources to enhance classroom learning.",
    icon: MonitorSmartphone,
  },
  {
    id: 4,
    title: "Individual Support",
    description:
      "Providing personal guidance and support based on students' learning needs.",
    icon: Users,
  },
];

function MethodCard({
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
        <p className="leading-7 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function TeachingMethodology() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium uppercase tracking-wider text-primary">
            Teaching Methodology
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Modern & Effective Teaching Approach
          </h2>

          <p className="mt-4 text-muted-foreground">
            We follow student-centered teaching methods that encourage
            creativity, critical thinking, practical learning, and overall
            development of every student.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teachingMethods.map((method) => (
            <MethodCard
              key={method.id}
              title={method.title}
              description={method.description}
              icon={method.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}