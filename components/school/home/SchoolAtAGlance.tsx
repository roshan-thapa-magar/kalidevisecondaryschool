import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Building2, CalendarDays, GraduationCap, MapPin, Users } from 'lucide-react';
import React from 'react'
const schoolStats = [
  { id: 1, icon: CalendarDays, value: "2060 BS", label: "Established" },
  { id: 2, icon: Users, value: "800+", label: "Students" },
  { id: 3, icon: GraduationCap, value: "40+", label: "Teachers & Staff" },
  { id: 4, icon: BookOpen, value: "ECD – Grade 10", label: "Academic Programs" },
  { id: 5, icon: Building2, value: "Library & Labs", label: "Modern Facilities" },
  { id: 6, icon: MapPin, value: "Gorkha, Nepal", label: "School Location" },
];

const StatCard = ({ icon: Icon, value, label }: { icon: any; value: string; label: string }) => (
  <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-muted">
    <CardContent className="flex items-center gap-5 p-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <div>
        <p className="text-3xl font-bold">{value}</p>
        <p className="text-muted-foreground">{label}</p>
      </div>
    </CardContent>
  </Card>
);

export default function SchoolAtAGlance() {
    const SectionHeader = ({
        badge,
        title,
        description
    }: {
        badge: string;
        title: string;
        description: string;
    }) => (
        <div className="mx-auto mb-14 max-w-3xl text-center">
            <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/5 px-4 py-1 uppercase tracking-[0.25em] text-primary">
                {badge}
            </Badge>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
                {description}
            </p>
        </div>
    );
    return (
        <div>
            <section className="relative overflow-hidden py-20 lg:py-28">
                <div className="container mx-auto max-w-7xl px-6">
                    <SectionHeader
                        badge="Quick Overview"
                        title="School at a Glance"
                        description="Discover the key highlights of Kali Devi Secondary School and our commitment to providing quality education for every student."
                    />
                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {schoolStats.map((stat) => (
                            <StatCard key={stat.id} {...stat} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
