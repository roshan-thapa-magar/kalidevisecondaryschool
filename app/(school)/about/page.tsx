import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TeacherCard from "@/components/TeacherCard";
import {
  BookOpen,
  Building2,
  Bus,
  CalendarDays,
  Eye,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Library,
  Lightbulb,
  MapPin,
  Monitor,
  ShieldCheck,
  Target,
  Trophy,
  Users,
  Volleyball,
} from "lucide-react";

export default function AboutPage() {
  // Static data
  const facilities = [
    {
      id: 1,
      title: "Library",
      description:
        "A well-stocked library that encourages reading, research, and lifelong learning.",
      icon: Library,
      image: "/images/facilities/library.jpg",
      alt: "School library with bookshelves and reading area",
    },
    {
      id: 2,
      title: "Computer Lab",
      description:
        "Modern computers and internet access help students develop digital literacy and technical skills.",
      icon: Monitor,
      image: "/images/facilities/computer.jpg",
      alt: "Students working on computers in the lab",
    },
    {
      id: 3,
      title: "Science Laboratory",
      description:
        "Practical experiments allow students to explore scientific concepts through hands-on learning.",
      icon: FlaskConical,
      image: "/images/facilities/science.jpg",
      alt: "Science laboratory with equipment and students conducting experiments",
    },
    {
      id: 4,
      title: "Sports & Playground",
      description:
        "Spacious playgrounds encourage sports, teamwork, fitness, and extracurricular activities.",
      icon: Volleyball,
      image: "/images/facilities/playground.jpg",
      alt: "School playground with students playing sports",
    },
    {
      id: 5,
      title: "Transportation",
      description:
        "Safe and reliable transportation services for students from nearby communities.",
      icon: Bus,
      image: "/images/facilities/bus.jpg",
      alt: "School bus parked at the campus",
    },
    {
      id: 6,
      title: "Safe Campus",
      description:
        "A secure, clean, and student-friendly campus that promotes learning and personal growth.",
      icon: ShieldCheck,
      image: "/images/facilities/campus.jpg",
      alt: "Safe and clean school campus environment",
    },
  ];

  const coreValues = [
    {
      id: 1,
      title: "Academic Excellence",
      description: "Striving for the highest standards in teaching and learning.",
      icon: BookOpen,
    },
    {
      id: 2,
      title: "Respect",
      description: "Treating everyone with kindness, dignity, and compassion.",
      icon: HeartHandshake,
    },
    {
      id: 3,
      title: "Integrity",
      description: "Promoting honesty, responsibility, and ethical behavior.",
      icon: ShieldCheck,
    },
    {
      id: 4,
      title: "Innovation",
      description: "Encouraging creativity, curiosity, and lifelong learning.",
      icon: Lightbulb,
    },
    {
      id: 5,
      title: "Community",
      description: "Building strong partnerships among students, parents, and teachers.",
      icon: Users,
    },
    {
      id: 6,
      title: "Leadership",
      description: "Developing confident, responsible, and future-ready leaders.",
      icon: Trophy,
    },
  ];

  const teachers = [
    {
      id: 1,
      name: "Mr. Baburam Tamang",
      designation: "Principal",
      image: "/images/principal.png",
      badge: "Principal",
    },
    {
      id: 2,
      name: "Karuna Ale Magar",
      designation: "Science Teacher",
      image: "/images/gudiya.png",
      badge: "Teacher",
    },
    {
      id: 3,
      name: "Roshan Thapa Magar",
      designation: "Mathematics Teacher",
      image: "/images/roshan.png",
      badge: "Teacher",
    },
    {
      id: 4,
      name: "Karuna Gurung",
      designation: "English Teacher",
      image: "/images/madam.png",
      badge: "Teacher",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[calc(100vh-64px)] w-full overflow-hidden"
        aria-label="About Kali Devi Secondary School"
      >
        <Image
          src="/images/volleyball.jpg"
          alt="Kali Devi Secondary School campus and students"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-5xl px-6 text-center text-white">
            <p className="mb-4 text-lg uppercase tracking-[0.3em]">
              Government of Nepal
            </p>

            <h1 className="mb-6 text-5xl font-bold md:text-7xl">
              Kali Devi Secondary School
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg md:text-2xl">
              Providing quality education, nurturing responsible citizens, and
              empowering students through knowledge, discipline, and community
              values.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <Button size="lg" >
                <Link href="/admission">Admission</Link>
              </Button>

              <Button size="lg" variant="outline" >
                <Link href="/about">Explore School</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/about.jpg"
                alt="Kali Devi Secondary School"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div >
              <Badge
                variant="outline"
                className="rounded-full border-primary/20 bg-primary/5 px-4 py-1 uppercase tracking-[0.25em] "
              >
                Our Story
              </Badge>

              <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                A Journey of
                <br />
                Learning & Excellence
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground text-justify">
                Established in <strong>2060 B.S.</strong>, Kali Devi Secondary
                School has been committed to providing quality education and
                nurturing responsible citizens for our community. From humble
                beginnings, the school has grown into a trusted institution that
                inspires academic excellence, discipline, and lifelong learning.
              </p>

              <p className="mt-5 text-lg leading-8 text-muted-foreground text-justify">
                Through the dedication of our teachers, support from parents, and
                collaboration with the School Management Committee, we continue to
                create a safe and inclusive environment where every student can
                discover their potential and prepare confidently for the future.
              </p>

              <p className="mt-5 text-lg leading-8 text-muted-foreground text-justify">
                Today, Kali Devi Secondary School proudly serves students from ECD
                to Grade 10, combining quality education with extracurricular
                activities, leadership development, and strong community values.
              </p>

              <Button className="mt-8" size="lg" >
                <Link href="/admission">
                  Join Our School
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Section */}
      <section className="py-16 lg:py-24" aria-label="Principal's message">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <TeacherCard
              name="Mr. Baburam Tamang"
              designation="Principal"
              image="/images/principal.png"
            />

            {/* Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Principal's Message
              </p>

              <h2 className="mt-4 mb-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Message from
                <br />
                the Principal
              </h2>

              <div className="space-y-5 text-base leading-8 text-muted-foreground lg:text-lg lg:leading-9 text-justify">
                <p >
                  Welcome to Kali Devi Secondary School. We believe every child
                  has unique talents and unlimited potential. Our mission is to
                  provide quality education in a caring, disciplined, and
                  inspiring environment.
                </p>

                <p >
                  Our experienced teachers encourage curiosity, creativity, and
                  critical thinking while nurturing strong moral values and
                  lifelong learning habits. We work closely with parents to
                  support every student's academic and personal growth.
                </p>

                <p >
                  Together, let us continue building a school community where
                  every learner is empowered to achieve success and become a
                  responsible citizen of the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chairperson Section */}
      <section
        className="bg-muted/30 py-16 lg:py-24"
        aria-label="Chairperson's message"
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}
            <div>
              <Badge
                variant="outline"
                className="rounded-full border-primary/20 bg-primary/5 px-4 py-1 uppercase tracking-[0.25em] text-primary"
              >
                School Management Committee
              </Badge>

              <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Message from
                <br />
                the Chairperson
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground lg:text-lg lg:leading-9 text-justify">
                <p>
                  On behalf of the School Management Committee, I warmly welcome
                  all students, parents, teachers, and visitors to Kali Devi
                  Secondary School.
                </p>

                <p>
                  Our committee is committed to strengthening academic
                  excellence, improving school facilities, and ensuring that
                  every student receives quality education in a safe and
                  supportive environment.
                </p>

                <p>
                  With the cooperation of teachers, parents, and the community,
                  we continue to build an institution that prepares students
                  with knowledge, leadership, discipline, and strong ethical
                  values for the future.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <TeacherCard
                name="Khum Bahadur Thapa Magar"
                designation="Chairperson"
                image="/images/Chairperson.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 lg:py-28" aria-label="Vision and mission">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Vision & Mission
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Guided by strong values and a commitment to excellence, Kali Devi
              Secondary School strives to inspire every student to learn, grow,
              and contribute positively to society.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Vision */}
            <Card className="border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Eye className="h-7 w-7 text-primary" />
                </div>

                <CardTitle className="text-2xl">Our Vision</CardTitle>

                <CardDescription>
                  Shaping confident learners and responsible citizens.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="leading-8 text-muted-foreground">
                  To become a leading educational institution that empowers
                  students through quality education, innovation, discipline,
                  and lifelong learning while nurturing responsible citizens who
                  positively contribute to their community and the nation.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>

                <CardTitle className="text-2xl">Our Mission</CardTitle>

                <CardDescription>
                  Providing quality education for every learner.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                  <li>• Deliver high-quality, student-centered education.</li>
                  <li>• Encourage creativity, innovation, and critical thinking.</li>
                  <li>• Build strong moral values, discipline, and leadership.</li>
                  <li>• Foster a safe, inclusive, and supportive learning environment.</li>
                  <li>• Prepare students for higher education and lifelong success.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-muted/30 py-20 lg:py-28" aria-label="Core values">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Core Values
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              At Kali Devi Secondary School, our values guide every decision,
              inspire every learner, and build a strong foundation for lifelong
              success.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <Card
                key={value.id}
                className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>

                  <CardTitle className="mt-4">{value.title}</CardTitle>

                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Preview */}
      <section className="py-20 lg:py-28" aria-label="Our teachers">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Section Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Meet Our Dedicated Teachers
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Our passionate educators are committed to inspiring students
              through quality education, guidance, and lifelong learning.
            </p>
          </div>

          {/* Teachers Grid */}
          <div className="grid justify-items-center gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {teachers.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                name={teacher.name}
                designation={teacher.designation}
                image={teacher.image}
                badge={teacher.badge}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-14 flex justify-center">
            <Button size="lg" >
              <Link href="/teachers">View All Teachers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-muted/30 py-20 lg:py-28" aria-label="School facilities">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              School Facilities
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              We provide modern facilities that support academic excellence,
              creativity, physical development, and a safe learning environment
              for every student.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => {
              const IconComponent = facility.icon;
              return (
                <Card
                  key={facility.id}
                  className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-52">
                    <Image
                      src={facility.image}
                      alt={facility.alt}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>

                    <CardTitle className="mt-4">{facility.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground leading-7">
                      {facility.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}