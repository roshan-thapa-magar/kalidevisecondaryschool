import Link from "next/link";
import {
  Download,
  FileText,
  FileSpreadsheet,
  FileCheck2,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const documents = [
  {
    id: 1,
    title: "Admission Form",
    description: "Download the admission application form.",
    icon: FileText,
    file: "/documents/admission-form.pdf",
  },
  {
    id: 2,
    title: "Academic Calendar",
    description: "Important dates for the academic session.",
    icon: FileSpreadsheet,
    file: "/documents/academic-calendar.pdf",
  },
  {
    id: 3,
    title: "SEE Examination Routine",
    description: "Latest SEE examination schedule.",
    icon: FileCheck2,
    file: "/documents/see-routine.pdf",
  },
];

function DocumentCard({
  title,
  description,
  icon: Icon,
  file,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  file: string;
}) {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="flex items-center justify-between gap-6 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-7 w-7 text-primary" />
          </div>

          <div>
            <h3 className="text-lg font-semibold">{title}</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {description}
            </p>
          </div>
        </div>

        <Button >
          <Link href={file}>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function Documents() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium uppercase tracking-wider text-primary">
            Documents
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Download Important Documents
          </h2>

          <p className="mt-4 text-muted-foreground">
            Access and download important school documents, forms, examination
            routines, academic calendars, and other official publications.
          </p>
        </div>

        {/* Documents */}
        <div className="space-y-6">
          {documents.map((document) => (
            <DocumentCard
              key={document.id}
              title={document.title}
              description={document.description}
              icon={document.icon}
              file={document.file}
            />
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" >
            <Link href="/downloads">
              View All Documents
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}