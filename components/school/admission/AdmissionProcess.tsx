import {
  ClipboardCheck,
  FileText,
  School,
  UserCheck,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const admissionSteps = [
  {
    id: 1,
    title: "Submit Application",
    description:
      "Complete the admission inquiry form or collect the official admission form from the school office.",
    icon: FileText,
  },
  {
    id: 2,
    title: "Document Verification",
    description:
      "Submit all required documents for verification by the admission office.",
    icon: ClipboardCheck,
  },
  {
    id: 3,
    title: "Student Assessment",
    description:
      "Eligible students may be invited for an entrance assessment or interview, depending on the grade level.",
    icon: UserCheck,
  },
  {
    id: 4,
    title: "Admission Confirmation",
    description:
      "Complete the admission formalities, pay the required fees, and officially join the school.",
    icon: School,
  },
];

function ProcessCard({
  step,
  title,
  description,
  icon: Icon,
}: {
  step: number;
  title: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <Card className="relative h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-8">
        {/* Step Number */}
        <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
          {step}
        </div>

        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <Icon className="h-8 w-8 text-primary" />
        </div>

        {/* Content */}
        <h3 className="mt-6 text-xl font-semibold">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

export default function AdmissionProcess() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Admission Process
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Follow these simple steps to complete your admission at
            Kali Devi Secondary School.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {admissionSteps.map((item) => (
            <ProcessCard
              key={item.id}
              step={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}