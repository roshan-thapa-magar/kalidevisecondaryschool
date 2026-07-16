import {
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
  HeartPulse,
  Monitor,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const curriculumSubjects = [
  {
    id: 1,
    title: "Language Studies",
    description:
      "Developing strong communication skills through Nepali, English, and local language education.",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Mathematics",
    description:
      "Building logical thinking and problem-solving abilities through practical and conceptual mathematics.",
    icon: Calculator,
  },
  {
    id: 3,
    title: "Science",
    description:
      "Encouraging scientific inquiry through classroom learning, experiments, and practical activities.",
    icon: FlaskConical,
  },
  {
    id: 4,
    title: "Social Studies",
    description:
      "Promoting civic responsibility, cultural understanding, geography, history, and social awareness.",
    icon: Globe,
  },
  {
    id: 5,
    title: "Computer Education",
    description:
      "Introducing digital literacy, computer fundamentals, and technology skills for the modern world.",
    icon: Monitor,
  },
  {
    id: 6,
    title: "Health & Physical Education",
    description:
      "Encouraging healthy lifestyles, physical fitness, teamwork, and overall well-being through sports and health education.",
    icon: HeartPulse,
  },
];

export default function Curriculum() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium uppercase tracking-wider text-primary">
            Curriculum
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            National Curriculum with Holistic Learning
          </h2>

          <p className="mt-4 text-muted-foreground">
            Kali Devi Secondary School follows the National Curriculum
            Framework of Nepal, providing students with a balanced education
            that develops academic knowledge, practical skills, creativity,
            and responsible citizenship.
          </p>
        </div>

        {/* Subject Cards */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {curriculumSubjects.map((subject) => {
            const Icon = subject.icon;

            return (
              <Card
                key={subject.id}
                className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  <CardTitle className="mt-4">
                    {subject.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="leading-7 text-muted-foreground">
                    {subject.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}