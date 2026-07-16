import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Baby, BookOpen, GraduationCap, School } from 'lucide-react';
import React from 'react'
const programs = [
  {
    id: 1,
    title: "Early Childhood Development",
    description: "A joyful learning environment focused on creativity, play-based learning, communication, and early childhood development.",
    grades: "Nursery • LKG • UKG",
    icon: Baby,
  },
  {
    id: 2,
    title: "Primary Level",
    description: "Building strong foundations in literacy, numeracy, creativity, and character through engaging classroom activities.",
    grades: "Grade 1 – Grade 5",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Lower Secondary",
    description: "Encouraging analytical thinking, practical learning, teamwork, and academic growth across all core subjects.",
    grades: "Grade 6 – Grade 8",
    icon: GraduationCap,
  },
  {
    id: 4,
    title: "Secondary Level",
    description: "Preparing students for SEE examinations through quality teaching, practical experiences, and continuous academic support.",
    grades: "Grade 9 – Grade 10",
    icon: School,
  },
];
export default function AcademicPrograms() {
    const SectionHeader = ({
  badge,
  title,
  description,
  center = true,
}: {
  badge: string;
  title: string;
  description: string;
  center?: boolean;
}) => (
  <div className={`mx-auto mb-14 max-w-3xl ${center ? 'text-center' : ''}`}>
    <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium uppercase tracking-wider text-primary">
      {badge}
    </span>
    <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    <p className="mt-4 text-muted-foreground">{description}</p>
  </div>
);
const ProgramCard = ({ program }: { program: typeof programs[0] }) => {
  const Icon = program.icon;
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <CardTitle className="mt-4">{program.title}</CardTitle>
        <CardDescription>{program.grades}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="leading-7 text-muted-foreground">{program.description}</p>
      </CardContent>
    </Card>
  );
};
  return (
    <>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Academic Programs"
            title="Comprehensive Learning From Early Childhood to Secondary Level"
            description="Kali Devi Secondary School offers a well-structured academic journey that supports students at every stage of their education. Our programs follow the National Curriculum of Nepal while promoting knowledge, creativity, discipline, and holistic development."
          />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
