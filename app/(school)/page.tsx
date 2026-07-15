import { HeroSection } from "@/components/marketing/hero-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  BookOpen,
  Building2,
  CalendarDays,
  Clock,
  Clock3,
  GraduationCap,
  Mail,
  MapPin,
  Medal,
  Phone,
  Star,
  Trophy,
  Users,
  ArrowRight,
  Bell
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ================= DATA =================
const schoolStats = [
  { id: 1, icon: CalendarDays, value: "2060 BS", label: "Established" },
  { id: 2, icon: Users, value: "800+", label: "Students" },
  { id: 3, icon: GraduationCap, value: "40+", label: "Teachers & Staff" },
  { id: 4, icon: BookOpen, value: "ECD – Grade 10", label: "Academic Programs" },
  { id: 5, icon: Building2, value: "Library & Labs", label: "Modern Facilities" },
  { id: 6, icon: MapPin, value: "Gorkha, Nepal", label: "School Location" },
];

const strengths = [
  { id: 1, emoji: "📚", title: "Quality Education", description: "Modern teaching methods focused on student learning." },
  { id: 2, emoji: "👨‍🏫", title: "Qualified Teachers", description: "Dedicated teachers committed to student success." },
  { id: 3, emoji: "⚽", title: "Sports & Activities", description: "Encouraging physical fitness and teamwork through extracurricular activities." },
  { id: 4, emoji: "🏫", title: "Safe Environment", description: "Clean school with supportive learning atmosphere." },
];

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

const galleryImages = [
  { id: 1, src: "/images/gallery/a.jpg", alt: "School Event" },
  { id: 2, src: "/images/gallery/b.jpg", alt: "Students Learning" },
  { id: 3, src: "/images/gallery/c.jpg", alt: "Sports Activities" },
  { id: 4, src: "/images/gallery/d.jpg", alt: "Cultural Program" },
];

const contactInfo = [
  { id: 1, icon: MapPin, title: "Address", content: "Kali Devi Secondary School\nGorkha, Nepal" },
  { id: 2, icon: Phone, title: "Phone", content: "+977-98XXXXXXXX" },
  { id: 3, icon: Mail, title: "Email", content: "info@kdss.edu.np" },
  { id: 4, icon: Clock, title: "Office Hours", content: "Sunday – Friday\n10:00 AM – 4:00 PM" },
];

// ================= COMPONENTS =================
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

const ContactItem = ({ icon: Icon, title, content }: { icon: any; title: string; content: string }) => (
  <div className="flex items-start gap-4">
    <Icon className="mt-1 h-6 w-6 text-primary" />
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-muted-foreground whitespace-pre-line">{content}</p>
    </div>
  </div>
);

// ================= MAIN COMPONENT =================
export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-[calc(100vh-64px)] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source
            src="https://res.cloudinary.com/dzbtzumsd/video/upload/v1756221415/samples/dance-2.mp4"
            type="video/mp4"
          />
        </video>
      </section>

      {/* ================= SCHOOL OVERVIEW ================= */}
      <HeroSection
        badge="Explore"
        title="Life At KDSS"
        image="/images/school.jpg"
        description={[
          "Beginning your learning journey at Kali Devi Secondary School is a meaningful experience filled with knowledge, discovery, friendship, and personal growth.",
          "We provide a supportive learning environment where students develop academic excellence, creativity, discipline, and confidence to prepare for future opportunities.",
          "Through experienced teachers, modern facilities, extracurricular activities, and community values, we help students become responsible and successful citizens.",
        ]}
        primaryButton={{
          label: "Explore School",
          href: "/about",
        }}
      />

      {/* ================= SCHOOL AT A GLANCE ================= */}
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

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="uppercase font-semibold text-primary">Our Strengths</p>
            <h2 className="mt-3 text-4xl font-bold">Why Choose Our School</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item) => (
              <div key={item.id} className="rounded-xl border p-8 text-center">
                <div className="mb-5 text-5xl">{item.emoji}</div>
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LATEST NEWS ================= */}
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

      {/* ================= UPCOMING EVENTS ================= */}
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

      {/* ================= GALLERY PREVIEW ================= */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Gallery"
            title="Gallery Preview"
            description="Explore memorable moments from school activities, celebrations, academic programs, sports events, and school life."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width:768px) 100vw, 25vw"
                  className="object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Button size="lg">
              <Link href="/gallery" className="flex items-center">
                <span>View Full Gallery</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= MAP & CONTACT ================= */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Contact Us"
            title="Visit Our School"
            description="We'd love to welcome you to Kali Devi Secondary School. Visit our school or contact us for admissions and general inquiries."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Google Map */}
            <div className="overflow-hidden rounded-2xl border">
              <iframe
                src="YOUR_GOOGLE_MAP_EMBED_URL"
                width="100%"
                height="500"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>

            {/* Contact Information */}
            <Card>
              <CardContent className="space-y-8 p-8">
                {contactInfo.map((item) => (
                  <ContactItem key={item.id} {...item} />
                ))}
                <Button size="lg">
                  <Link href="/contact" className="flex items-center">
                    <span>Contact Us</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Join Kali Devi Secondary School
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Become part of an institution committed to academic excellence,
            innovation, and holistic student development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-black hover:bg-white/90">
              Apply Now
            </Button>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </section>
    </main>
  );
}