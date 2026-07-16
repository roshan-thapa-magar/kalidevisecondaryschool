// contact/VisitUs.tsx

import { FaMapMarkerAlt, FaBus, FaSchool } from "react-icons/fa";

import { Card, CardContent } from "@/components/ui/card";

const visitDetails = [
  {
    icon: FaSchool,
    title: "School Campus",
    description:
      "Visit Kali Devi Secondary School and explore our learning environment, classrooms, and facilities.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    description:
      "Gorkha, Nepal. Easily accessible from nearby communities.",
  },
  {
    icon: FaBus,
    title: "Transportation",
    description:
      "Convenient transportation facilities are available for students.",
  },
];

export function VisitUs() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Visit Us
          </h2>

          <p className="mt-3 text-muted-foreground">
            We welcome parents, students, and visitors to our school campus.
          </p>
        </div>


        <div className="grid gap-8 lg:grid-cols-2">

          {/* Map */}
          <div className="overflow-hidden rounded-xl border">
            <iframe
              title="Kali Devi Secondary School Location"
              src="https://www.google.com/maps?q=Gorkha,Nepal&output=embed"
              className="h-[400px] w-full border-0"
              loading="lazy"
            />
          </div>


          {/* Information Cards */}
          <div className="grid gap-5">
            {visitDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <Card key={index}>
                  <CardContent className="flex gap-4 p-6">
                    <div className="rounded-full bg-muted p-3 h-fit">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}