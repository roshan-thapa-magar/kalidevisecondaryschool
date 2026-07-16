import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Bell, CalendarDays } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const notices = [
    {
        id: 1,
        badge: "Admission",
        title: "Admission Open for Academic Session 2083",
        date: "July 13, 2026"
    },
    {
        id: 2,
        badge: "Examination",
        title: "First Terminal Examination Routine Published",
        date: "July 10, 2026"
    },
    {
        id: 3,
        badge: "Result",
        title: "SEE Examination Results Published",
        date: "July 5, 2026"
    },
];

export default function LatestNotices() {
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


    const NoticeCard = ({ notice }: { notice: typeof notices[0] }) => (
        <Card className="transition-all hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Bell className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <Badge variant="secondary">{notice.badge}</Badge>
                        <h3 className="mt-3 text-xl font-semibold">{notice.title}</h3>
                        <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                            <CalendarDays className="h-4 w-4" />
                            {notice.date}
                        </div>
                    </div>
                </div>
                <Button>
                    <Link href="/notices" className="flex items-center">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );

    return (
        <>
            <section className="py-20 lg:py-28">
                <div className="container mx-auto max-w-7xl px-6">
                    <SectionHeader
                        badge="Latest Notices"
                        title="School Notices & Announcements"
                        description="Stay informed with the latest announcements, examination schedules, admission updates, and important school notices."
                    />
                    <div className="space-y-5">
                        {notices.map((notice) => (
                            <NoticeCard key={notice.id} notice={notice} />
                        ))}
                    </div>
                    <div className="mt-12 flex justify-center">
                        <Button size="lg">
                            <Link href="/notices" className="flex items-center">
                                View All Notices
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
