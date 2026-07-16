import Link from "next/link";

import { Button } from "@/components/ui/button";

const resultStats = [
  {
    id: 1,
    value: "98%",
    label: "SEE Pass Rate",
    description:
      "Students successfully completed their SEE examination.",
  },
  {
    id: 2,
    value: "A+",
    label: "Highest Grade Achieved",
    description:
      "Students secured excellent academic performance.",
  },
  {
    id: 3,
    value: "100+",
    label: "Successful Graduates",
    description:
      "Students continuing higher education successfully.",
  },
];

function ResultCard({
  value,
  label,
  description,
}: {
  value: string;
  label: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border bg-background p-8 text-center shadow-sm transition hover:shadow-md">
      <h3 className="text-4xl font-bold text-primary">{value}</h3>

      <p className="mt-2 font-medium">{label}</p>

      <p className="mt-2 text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

export default function Results() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium uppercase tracking-wider text-primary">
            SEE Result
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Outstanding SEE Results & Achievements
          </h2>

          <p className="mt-4 text-muted-foreground">
            Our students have consistently achieved excellent results in the
            Secondary Education Examination through dedication, hard work, and
            quality education.
          </p>
        </div>

        {/* Result Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {resultStats.map((stat) => (
            <ResultCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <Button size="lg">
            <Link href="/results">View Detailed Results</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}