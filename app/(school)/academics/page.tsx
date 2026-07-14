import Image from "next/image";
import Link from "next/link";
import {
  Baby,
  BookOpen,
  Calculator,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  FlaskConical,
  Globe,
  GraduationCap,
  HeartPulse,
  Monitor,
  School
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// ================= DATA =================
const programs = [
  {
    id: 1,
    title: "Early Childhood Development",
    description: "A joyful learning environment focused on creativity, play-based learning, communication, and early childhood development.",
    grades: "Nursery • LKG • UKG",
    icon: Baby,
  },
  {
    id: 2,
    title: "Primary Level",
    description: "Building strong foundations in literacy, numeracy, creativity, and character through engaging classroom activities.",
    grades: "Grade 1 – Grade 5",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Lower Secondary",
    description: "Encouraging analytical thinking, practical learning, teamwork, and academic growth across all core subjects.",
    grades: "Grade 6 – Grade 8",
    icon: GraduationCap,
  },
  {
    id: 4,
    title: "Secondary Level",
    description: "Preparing students for SEE examinations through quality teaching, practical experiences, and continuous academic support.",
    grades: "Grade 9 – Grade 10",
    icon: School,
  },
];

const curriculumSubjects = [
  {
    id: 1,
    title: "Language Studies",
    description: "Developing strong communication skills through Nepali, English, and local language education.",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Mathematics",
    description: "Building logical thinking and problem-solving abilities through practical and conceptual mathematics.",
    icon: Calculator,
  },
  {
    id: 3,
    title: "Science",
    description: "Encouraging scientific inquiry through classroom learning, experiments, and practical activities.",
    icon: FlaskConical,
  },
  {
    id: 4,
    title: "Social Studies",
    description: "Promoting civic responsibility, cultural understanding, geography, history, and social awareness.",
    icon: Globe,
  },
  {
    id: 5,
    title: "Computer Education",
    description: "Introducing digital literacy, computer fundamentals, and technology skills for the modern world.",
    icon: Monitor,
  },
  {
    id: 6,
    title: "Health & Physical Education",
    description: "Encouraging healthy lifestyles, physical fitness, teamwork, and overall well-being through sports and health education.",
    icon: HeartPulse,
  },
];

const stats = [
  { id: 1, value: "20+", label: "Qualified Teachers" },
  { id: 2, value: "500+", label: "Active Students" },
  { id: 3, value: "ECD–10", label: "Academic Levels" },
  { id: 4, value: "100%", label: "Student Support" },
];

const routineFeatures = [
  "Available for all grades (ECD – Grade 10)",
  "Updated every academic session",
  "Easy PDF download",
];

const examFeatures = [
  "First Terminal Examination",
  "Second Terminal Examination",
  "Final Examination",
  "SEE Preparation & Mock Tests",
];

const calendarFeatures = [
  "School Opening Day",
  "First Terminal Examination",
  "Second Terminal Examination",
  "Final Examination",
  "Public Holidays & Vacations",
  "Annual Sports & Cultural Program",
];

const resultStats = [
  { id: 1, value: "98%", label: "SEE Pass Rate", description: "Students successfully completed their SEE examination." },
  { id: 2, value: "A+", label: "Highest Grade Achieved", description: "Students secured excellent academic performance." },
  { id: 3, value: "100+", label: "Successful Graduates", description: "Students continuing higher education successfully." },
];

const teachingMethods = [
  { id: 1, emoji: "📚", title: "Interactive Learning", description: "Engaging classroom activities, discussions, and teamwork to improve understanding." },
  { id: 2, emoji: "💡", title: "Practical Education", description: "Learning through experiments, projects, and real-life applications." },
  { id: 3, emoji: "🖥️", title: "Technology-Based Learning", description: "Using digital tools and modern resources to enhance classroom learning." },
  { id: 4, emoji: "👨‍🏫", title: "Individual Support", description: "Providing personal guidance and support based on students' learning needs." },
];

const enrichmentActivities = [
  { id: 1, emoji: "🧠", title: "Quiz Competitions", description: "Encouraging knowledge sharing, quick thinking, and healthy academic competition." },
  { id: 2, emoji: "🔬", title: "Science Projects", description: "Promoting innovation through experiments, research, and practical demonstrations." },
  { id: 3, emoji: "📖", title: "Reading & Writing", description: "Building language skills through reading clubs, writing activities, and presentations." },
  { id: 4, emoji: "🎤", title: "Debate & Presentation", description: "Developing communication skills, confidence, and leadership qualities." },
];

// ================= COMPONENTS =================
const SectionHeader = ({
  badge,
  title,
  description,
  center = true,
}: {
  badge: string;
  title: string;
  description: string;
  center?: boolean;
}) => (
  <div className={`mx-auto mb-14 max-w-3xl ${center ? 'text-center' : ''}`}>
    <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium uppercase tracking-wider text-primary">
      {badge}
    </span>
    <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    <p className="mt-4 text-muted-foreground">{description}</p>
  </div>
);

const ProgramCard = ({ program }: { program: typeof programs[0] }) => {
  const Icon = program.icon;
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <CardTitle className="mt-4">{program.title}</CardTitle>
        <CardDescription>{program.grades}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="leading-7 text-muted-foreground">{program.description}</p>
      </CardContent>
    </Card>
  );
};

const SubjectCard = ({ subject }: { subject: typeof curriculumSubjects[0] }) => {
  const Icon = subject.icon;
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <CardTitle className="mt-4">{subject.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="leading-7 text-muted-foreground">{subject.description}</p>
      </CardContent>
    </Card>
  );
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  features,
  buttonText,
  buttonLink,
  buttonVariant = "default",
  imageSrc,
  imageAlt,
  imagePosition = "right",
}: {
  icon: any;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  buttonVariant?: "default" | "outline";
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}) => (
  <div className="grid items-center gap-10 lg:grid-cols-2">
    {imagePosition === "left" && (
      <Card className="overflow-hidden border-border/60 shadow-sm">
        <div className="relative aspect-[4/3]">
          <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover" />
        </div>
      </Card>
    )}

    <Card className="border-border/60 shadow-sm">
      <CardHeader>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <CardTitle className="mt-4 text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span>{feature}</span>
          </div>
        ))}
        <div className="pt-4 flex flex-wrap gap-4">
          <Button variant={buttonVariant === "default" ? "default" : "outline"}>
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
          {buttonVariant === "default" && (
            <Button variant="outline">
              <Link href={`${buttonLink}.pdf`}>Download PDF</Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>

    {imagePosition === "right" && (
      <Card className="overflow-hidden border-border/60 shadow-sm">
        <div className="relative aspect-[4/3]">
          <Image src={imageSrc} alt={imageAlt} fill   sizes="(max-width: 768px) 100vw, 50vw"
 className="object-cover" />
        </div>
      </Card>
    )}
  </div>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div>
    <h3 className="text-4xl font-bold text-primary">{value}</h3>
    <p className="mt-2 text-muted-foreground">{label}</p>
  </div>
);

const ResultCard = ({ stat }: { stat: typeof resultStats[0] }) => (
  <div className="rounded-2xl border bg-background p-8 text-center shadow-sm transition hover:shadow-md">
    <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
    <p className="mt-2 font-medium">{stat.label}</p>
    <p className="mt-2 text-sm text-muted-foreground">{stat.description}</p>
  </div>
);

const MethodCard = ({ method }: { method: typeof teachingMethods[0] }) => (
  <div className="rounded-2xl border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
      {method.emoji}
    </div>
    <h3 className="text-lg font-semibold">{method.title}</h3>
    <p className="mt-2 text-sm text-muted-foreground">{method.description}</p>
  </div>
);

const ActivityCard = ({ activity }: { activity: typeof enrichmentActivities[0] }) => (
  <div className="rounded-2xl border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
      {activity.emoji}
    </div>
    <h3 className="text-lg font-semibold">{activity.title}</h3>
    <p className="mt-2 text-sm text-muted-foreground">{activity.description}</p>
  </div>
);

// ================= MAIN COMPONENT =================
export default function AcademicsHero() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[calc(100vh-64px)] min-h-[650px] overflow-hidden">
        {/* Background */}
        <Image
          src="/images/students.jpg"
          alt="Students studying at Kali Devi Secondary School"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/40" />

        {/* Decorative Blur */}
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_40%)]" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="max-w-3xl text-white">
              {/* Breadcrumb */}
              <div className="mb-6 flex items-center gap-2 text-sm text-white/80">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>Academics</span>
              </div>

              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
                <GraduationCap className="h-4 w-4" />
                Academic Excellence
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Academics
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/90 md:text-xl text-justify">
                We provide quality education through experienced teachers,
                student-centered learning, and a supportive environment that helps
                every learner achieve academic excellence and lifelong success.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg">
                  <Link href="/admission">Apply for Admission</Link>
                </Button>

                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white/15 text-white backdrop-blur hover:bg-white/25"
                >
                  <Link href="/contact">Contact School</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ================= ACADEMIC OVERVIEW ================= */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Academic Overview
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Inspiring Learning,
                <br />
                Building Bright Futures
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground text-justify">
                <p>
                  Kali Devi Secondary School is committed to providing a high-quality,
                  student-centered education that nurtures academic excellence,
                  creativity, discipline, and lifelong learning. Our dedicated teachers
                  create an engaging classroom environment where every student is
                  encouraged to think critically, solve problems confidently, and reach
                  their full potential.
                </p>

                <p>
                  We follow the National Curriculum of Nepal while integrating practical
                  learning, extracurricular activities, and modern teaching methods to
                  prepare students for higher education and responsible citizenship.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <StatCard key={stat.id} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/academics.jpg"
                  alt="Students learning in the classroom"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACADEMIC PROGRAMS ================= */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Academic Programs"
            title="Comprehensive Learning From Early Childhood to Secondary Level"
            description="Kali Devi Secondary School offers a well-structured academic journey that supports students at every stage of their education. Our programs follow the National Curriculum of Nepal while promoting knowledge, creativity, discipline, and holistic development."
          />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CURRICULUM ================= */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Curriculum"
            title="National Curriculum with Holistic Learning"
            description="Kali Devi Secondary School follows the National Curriculum Framework of Nepal, providing students with a balanced education that develops academic knowledge, practical skills, creativity, and responsible citizenship."
          />

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {curriculumSubjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLASS ROUTINE ================= */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Class Routine"
            title="Weekly Class Schedule"
            description="Stay updated with the latest class timetable for all grades. Students and parents can easily view or download the routine to stay organized throughout the academic year."
          />

          <FeatureCard
            icon={Clock3}
            title="Current Class Routine"
            description="Academic Session 2083"
            features={routineFeatures}
            buttonText="View Routine"
            buttonLink="/class-routine"
            imageSrc="/images/class-routine.jpg"
            imageAlt="Class Routine"
            imagePosition="right"
          />
        </div>
      </section>

      {/* ================= EXAM ROUTINE ================= */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Exam Routine"
            title="Examination Schedule"
            description="Stay informed with the latest examination timetable for all grades. Students are encouraged to regularly check the exam schedule and prepare accordingly for a successful academic performance."
          />

          <FeatureCard
            icon={ClipboardCheck}
            title="Current Examination Routine"
            description="Academic Session 2083"
            features={examFeatures}
            buttonText="View Exam Routine"
            buttonLink="/exam-routine"
            imageSrc="/images/exam-routine.jpg"
            imageAlt="Exam Routine"
            imagePosition="left"
          />
        </div>
      </section>

      {/* ================= ACADEMIC CALENDAR ================= */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Academic Calendar"
            title="Important Academic Dates"
            description="Stay informed about the school's academic schedule, including important events, examinations, holidays, admissions, and other key dates throughout the academic year."
          />

          <FeatureCard
            icon={CalendarDays}
            title="Academic Session 2083"
            description="Key dates for students, parents, and teachers."
            features={calendarFeatures}
            buttonText="View Calendar"
            buttonLink="/calendar"
            imageSrc="/images/academic-calendar.jpg"
            imageAlt="Academic Calendar"
            imagePosition="right"
          />
        </div>
      </section>

      {/* ================= SEE RESULTS ================= */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="SEE Result"
            title="Outstanding SEE Results & Achievements"
            description="Our students have consistently achieved excellent results in the Secondary Education Examination through dedication, hard work, and quality education."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {resultStats.map((stat) => (
              <ResultCard key={stat.id} stat={stat} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg">
              <Link href="/results">View Detailed Results</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= TEACHING METHODOLOGY ================= */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Teaching Methodology"
            title="Modern & Effective Teaching Approach"
            description="We follow student-centered teaching methods that encourage creativity, critical thinking, practical learning, and overall development of every student."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teachingMethods.map((method) => (
              <MethodCard key={method.id} method={method} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXTRACURRICULAR ACTIVITIES ================= */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Extracurricular Activities"
            title="Academic Enrichment Activities"
            description="Beyond classroom learning, we provide various academic activities that develop creativity, confidence, teamwork, and problem-solving skills among students."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {enrichmentActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}