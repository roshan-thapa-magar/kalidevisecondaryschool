// app/notices/page.tsx

import {
  Bell,
  CalendarDays,
  FileText,
  Download,
  Search,
  GraduationCap,
  ClipboardList,
  Trophy,
  Megaphone,
  ArrowRight,
  Filter,
  Clock,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { HeroSection } from "@/components/marketing/hero-section";

// ================= DATA =================
const notices = [
  {
    id: 1,
    title: "SEE Examination Schedule Published",
    date: "July 10, 2026",
    category: "Examination",
    description:
      "The SEE examination routine has been published. Students are requested to check the schedule.",
    isImportant: true,
  },
  {
    id: 2,
    title: "Admission Open for New Academic Session",
    date: "July 05, 2026",
    category: "Admission",
    description:
      "Admissions are open for Grade Nursery to Grade 9. Apply before the deadline.",
    isImportant: true,
  },
  {
    id: 3,
    title: "Parent Teacher Meeting Notice",
    date: "June 25, 2026",
    category: "General",
    description:
      "Parents are invited to attend the upcoming interaction program with teachers.",
    isImportant: false,
  },
  {
    id: 4,
    title: "Annual Sports Program Announcement",
    date: "June 15, 2026",
    category: "Events",
    description:
      "Students are encouraged to participate in various sports activities.",
    isImportant: false,
  },
  {
    id: 5,
    title: "Mid-Term Examination Schedule",
    date: "June 10, 2026",
    category: "Examination",
    description:
      "Mid-term examinations for Grade 1-10 will begin from next week.",
    isImportant: false,
  },
  {
    id: 6,
    title: "School Closed for Summer Vacation",
    date: "June 01, 2026",
    category: "General",
    description:
      "School will remain closed for summer vacation from June 15 to July 1.",
    isImportant: false,
  },
];

const categories = [
  {
    id: 1,
    title: "General Notices",
    icon: Bell,
    description: "Important school announcements and updates.",
    count: 12,
  },
  {
    id: 2,
    title: "Academic Notices",
    icon: GraduationCap,
    description: "Class updates, routines, and academic information.",
    count: 8,
  },
  {
    id: 3,
    title: "Examination Notices",
    icon: ClipboardList,
    description: "Exam schedules, results, and guidelines.",
    count: 15,
  },
  {
    id: 4,
    title: "Events & Programs",
    icon: Trophy,
    description: "School events, competitions, and activities.",
    count: 6,
  },
];

const documents = [
  { id: 1, title: "SEE Examination Routine 2082", size: "2.4 MB" },
  { id: 2, title: "Admission Form", size: "1.1 MB" },
  { id: 3, title: "School Calendar 2083", size: "3.2 MB" },
  { id: 4, title: "Class Routine", size: "1.8 MB" },
  { id: 5, title: "Parent Handbook", size: "4.5 MB" },
];

const archiveYears = ["2083", "2082", "2081", "2080"];

// ================= COMPONENTS =================
const CategoryCard = ({ category }: { category: typeof categories[0] }) => {
  const Icon = category.icon;
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <Icon className="text-primary" size={32} />
          <Badge variant="secondary" className="rounded-full">
            {category.count}
          </Badge>
        </div>
        <h3 className="mt-4 font-semibold text-lg">{category.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
      </CardContent>
    </Card>
  );
};

const NoticeCard = ({ notice }: { notice: typeof notices[0] }) => {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Examination: "bg-blue-500/10 text-blue-600 border-blue-200",
      Admission: "bg-green-500/10 text-green-600 border-green-200",
      General: "bg-gray-500/10 text-gray-600 border-gray-200",
      Events: "bg-purple-500/10 text-purple-600 border-purple-200",
    };
    return colors[category] || "bg-primary/10 text-primary";
  };

  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className={`${getCategoryColor(notice.category)} border`}>
              {notice.category}
            </Badge>
            {notice.isImportant && (
              <Badge variant="destructive" className="animate-pulse">
                Important
              </Badge>
            )}
          </div>
          <span className="flex items-center gap-1 text-sm text-muted-foreground whitespace-nowrap">
            <CalendarDays size={15} />
            {notice.date}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold line-clamp-2">
          {notice.title}
        </h3>

        <p className="mt-2 text-muted-foreground line-clamp-3">
          {notice.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Button variant="outline" size="sm">
            View Notice
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          {notice.isImportant && (
            <Button size="sm">
              <Bell className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const DocumentItem = ({ document }: { document: typeof documents[0] }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border p-5 transition hover:shadow-md">
    <div className="flex items-center gap-3 min-w-0">
      <FileText className="text-primary flex-shrink-0" size={20} />
      <span className="truncate font-medium">{document.title}</span>
      <Badge variant="outline" className="ml-2 text-xs">
        {document.size}
      </Badge>
    </div>
    <Button size="sm" className="w-full sm:w-auto">
      <Download size={16} className="mr-2" />
      Download
    </Button>
  </div>
);

const ArchiveButton = ({ year }: { year: string }) => (
  <Button variant="outline" className="min-w-[80px]">
    {year}
  </Button>
);

// ================= MAIN COMPONENT =================
export default function NoticePage() {
  const importantNotices = notices.filter(n => n.isImportant);
  const latestNotices = notices.slice(0, 6);

  return (
    <main>
      {/* ================= HERO ================= */}
      <HeroSection
        badge="Stay Informed"
        title="Latest Announcements & Updates"
        description={[
          "Stay informed about all academic activities, examinations, admissions, events, and important school announcements at Kali Devi Secondary School.",
          "We provide timely updates on exam schedules, results, holiday notices, parent-teacher meetings, and extracurricular activities to ensure you never miss any important information.",
          "Our dedicated team works diligently to keep parents, students, and staff updated with the latest news and developments happening across the school community.",
          "From academic calendars to special events and emergency notifications, we ensure all stakeholders are well-informed and connected with the school's daily operations.",
        ]}
        image="/images/notices.jpg"
        primaryButton={{
          label: "Home",
          href: "/",
        }}
        secondaryButton={{
          label: "Notices",
          href: "/notices",
        }}
      />

      {/* ================= IMPORTANT NOTICE ================= */}
      {importantNotices.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-primary">
                    <Megaphone size={22} />
                    <span className="font-semibold">Important Notice</span>
                    <Badge variant="destructive" className="ml-2 animate-pulse">
                      New
                    </Badge>
                  </div>

                  <h2 className="mt-3 text-2xl font-bold">
                    {importantNotices[0].title}
                  </h2>

                  <p className="mt-2 text-muted-foreground">
                    {importantNotices[0].description}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays size={16} />
                    {importantNotices[0].date}
                    <span className="mx-2">•</span>
                    <Badge variant="outline">{importantNotices[0].category}</Badge>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    <Bell className="mr-2 h-4 w-4" />
                    Get Reminder
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= SEARCH ================= */}
      <section className="py-8">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex items-center gap-3 rounded-xl border bg-background p-4 focus-within:ring-2 focus-within:ring-primary transition-all">
              <Search className="text-muted-foreground" size={20} />
              <input
                placeholder="Search notices by title, category, or keyword..."
                className="w-full bg-transparent outline-none"
              />
            </div>
            <Button variant="outline" className="sm:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>
      </section>

      {/* ================= NOTICE CATEGORIES ================= */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-bold">Browse by Category</h2>
            <p className="mt-2 text-muted-foreground">
              Find notices based on their category
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= LATEST NOTICES ================= */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold">Latest Notices</h2>
              <p className="mt-2 text-muted-foreground">
                Recent announcements and updates from the school
              </p>
            </div>
            <Button variant="outline" className="mt-4 sm:mt-0">
              <Clock className="mr-2 h-4 w-4" />
              View All
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {latestNotices.map((notice) => (
              <NoticeCard key={notice.id} notice={notice} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button size="lg">
              Load More Notices
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ================= DOWNLOAD DOCUMENTS ================= */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-bold">Download Documents</h2>
            <p className="mt-2 text-muted-foreground">
              Important forms, schedules, and guides for students and parents
            </p>
          </div>

          <div className="space-y-4">
            {documents.map((doc) => (
              <DocumentItem key={doc.id} document={doc} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= ARCHIVE ================= */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold">Notice Archive</h2>
              <p className="mt-2 text-muted-foreground">
                Browse notices from previous academic sessions
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {archiveYears.map((year) => (
                <ArchiveButton key={year} year={year} />
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-xl border bg-background p-8 text-center">
            <p className="text-muted-foreground">
              Select a year above to view archived notices from that academic session.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <div className="rounded-2xl border bg-background/50 p-8 md:p-12">
            <h2 className="text-3xl font-bold">Need More Information?</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Contact the school administration for any notice-related queries or assistance.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full px-8">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                <Bell className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span>📞 +977 98XXXXXXXX</span>
              <span>✉️ notices@school.com</span>
              <span>🕐 Sunday - Friday, 10 AM - 4 PM</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}