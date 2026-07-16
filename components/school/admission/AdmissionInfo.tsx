import {
  GraduationCap,
  Phone,
  User,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const admissionInfo = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Admission Process",
    description:
      "Submit the application form, attend the entrance evaluation, and complete the admission formalities.",
  },
  {
    id: 2,
    icon: User,
    title: "Required Documents",
    description:
      "Prepare your birth certificate, previous academic records, passport-size photographs, and other required documents.",
  },
  {
    id: 3,
    icon: Phone,
    title: "Admission Support",
    description:
      "Our admission team is available to answer your questions and guide you throughout the admission process.",
  },
];

function InfoCard({
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
      <CardContent className="p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          <Icon className="h-7 w-7 text-primary" />
        </div>

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

export default function AdmissionInfo() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Admission Information
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Learn about our admission process, required documents,
            and the support available to help you join
            Kali Devi Secondary School.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {admissionInfo.map((item) => (
            <InfoCard
              key={item.id}
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