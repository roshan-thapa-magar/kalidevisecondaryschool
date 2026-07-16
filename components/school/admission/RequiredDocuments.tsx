import { CalendarDays, CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const requiredDocuments = [
  "Birth Certificate (Copy)",
  "Previous Academic Records / Report Card",
  "Character Certificate from Previous School",
  "Two Recent Passport-Size Photographs",
  "Parent/Guardian Citizenship Copy",
  "Transfer Certificate (If Applicable)",
];

function DocumentItem({ document }: { document: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
      <span className="text-muted-foreground">{document}</span>
    </div>
  );
}

export default function RequiredDocuments() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Required Documents
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Please prepare the following documents before submitting your
            admission application.
          </p>
        </div>

        {/* Documents Card */}
        <Card>
          <CardContent className="p-8 lg:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              {requiredDocuments.map((document, index) => (
                <DocumentItem
                  key={index}
                  document={document}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Admission Deadline */}
        <div className="mt-8 flex justify-center">
          <Badge
            variant="secondary"
            className="rounded-full px-5 py-2"
          >
            <CalendarDays className="mr-2 h-4 w-4" />
            Admission Deadline: Chaitra 30, 2083
          </Badge>
        </div>
      </div>
    </section>
  );
}