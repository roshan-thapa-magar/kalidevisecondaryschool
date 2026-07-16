import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Clock3, MapPin } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const events = [
    {
        id: 1,
        month: "AUG",
        day: "15",
        title: "Annual Sports Meet",
        description: "Students participate in athletics, football, volleyball, and various indoor and outdoor competitions.",
        time: "10:00 AM",
        location: "School Playground",
    },
    {
        id: 2,
        month: "SEP",
        day: "05",
        title: "Teachers' Day Celebration",
        description: "Students honor teachers with cultural performances, speeches, and appreciation programs.",
        time: "11:00 AM",
        location: "School Hall",
    },
    {
        id: 3,
        month: "OCT",
        day: "10",
        title: "Science Exhibition",
        description: "Students showcase innovative science projects, experiments, and creative ideas.",
        time: "9:30 AM",
        location: "Science Block",
    },
];


export default function UpcomingEvents() {
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

    const EventCard = ({ event }: { event: typeof events[0] }) => (
  <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <CardContent className="p-6">
      <div className="mb-5 inline-flex rounded-lg border px-4 py-2 text-center">
        <div>
          <p className="text-sm font-medium">{event.month}</p>
          <p className="text-3xl font-bold leading-none">{event.day}</p>
        </div>
      </div>
      <h3 className="text-xl font-semibold">{event.title}</h3>
      <p className="mt-3 text-muted-foreground">{event.description}</p>
      <div className="mt-6 space-y-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Clock3 className="h-4 w-4" />
          {event.time}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          {event.location}
        </div>
      </div>
    </CardContent>
  </Card>
);
    return (
        <>
            <section className="bg-muted py-20 lg:py-28">
                <div className="container mx-auto max-w-7xl px-6">
                    <SectionHeader
                        badge="Upcoming Events"
                        title="Upcoming Events"
                        description="Stay informed about school programs, celebrations, competitions, and important academic activities."
                    />
                    <div className="grid gap-6 lg:grid-cols-3">
                        {events.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                    <div className="mt-14 flex justify-center">
                        <Button size="lg">
                            <Link href="/events" className="flex items-center">
                                View All Events
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
