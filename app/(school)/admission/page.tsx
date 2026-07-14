// app/admission/page.tsx

import {
  MapPin,
  Phone,
  Mail,
  User,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  FileText,
  CalendarDays,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// ================= DATA =================
const admissionInfo = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Admission Process",
    description: "Submit application form, attend entrance evaluation, and complete admission formalities.",
  },
  {
    id: 2,
    icon: User,
    title: "Required Documents",
    description: "Birth certificate, previous academic records, photographs, and required documents.",
  },
  {
    id: 3,
    icon: Phone,
    title: "Admission Support",
    description: "Contact our administration team for admission guidance.",
  },
];

const contactInfo = [
  { id: 1, icon: MapPin, text: "School Location, Kathmandu, Nepal" },
  { id: 2, icon: Phone, text: "+977 98XXXXXXXX" },
  { id: 3, icon: Mail, text: "info@school.com" },
];

const requiredDocuments = [
  "Birth certificate (copy)",
  "Previous academic records (report cards)",
  "Passport size photographs (2 copies)",
  "Character certificate from previous school",
  "Parent/guardian citizenship copy",
];

// ================= COMPONENTS =================
const InfoCard = ({ item }: { item: typeof admissionInfo[0] }) => {
  const Icon = item.icon;
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-6">
        <Icon className="text-primary" size={32} />
        <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
      </CardContent>
    </Card>
  );
};

const ContactItem = ({ item }: { item: typeof contactInfo[0] }) => {
  const Icon = item.icon;
  return (
    <div className="flex gap-3">
      <Icon className="text-primary" size={20} />
      <p className="text-sm text-muted-foreground">{item.text}</p>
    </div>
  );
};

const DocumentItem = ({ document }: { document: string }) => (
  <div className="flex items-center gap-3">
    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
    <span className="text-sm text-muted-foreground">{document}</span>
  </div>
);

const InputField = ({
  label,
  type = "text",
  placeholder,
  className = "",
}: {
  label: string;
  type?: string;
  placeholder: string;
  className?: string;
}) => (
  <div className={className}>
    <label className="text-sm font-medium">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="mt-2 w-full rounded-xl border bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition-all"
    />
  </div>
);

const TextAreaField = ({
  label,
  rows = 4,
  placeholder,
}: {
  label: string;
  rows?: number;
  placeholder: string;
}) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <textarea
      rows={rows}
      placeholder={placeholder}
      className="mt-2 w-full rounded-xl border bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition-all resize-y"
    />
  </div>
);

// ================= MAIN COMPONENT =================
export default function AdmissionPage() {
  return (
    <main>
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-background py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto max-w-7xl px-6 text-center relative z-10">
          <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/5 px-6 py-2 text-primary">
            Admission Open
          </Badge>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Start Your Child's Journey
            <br />
            With Us
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Give your child quality education, a supportive environment,
            and opportunities to grow academically and personally.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full px-8">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              <FileText className="mr-2 h-4 w-4" />
              Download Form
            </Button>
          </div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* ================= ADMISSION INFO ================= */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {admissionInfo.map((item) => (
              <InfoCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= REQUIRED DOCUMENTS ================= */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Required Documents</h2>
            <p className="mt-3 text-muted-foreground">
              Please prepare the following documents before applying for admission.
            </p>
          </div>

          <Card className="mt-10">
            <CardContent className="p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {requiredDocuments.map((doc, index) => (
                  <DocumentItem key={index} document={doc} />
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Badge variant="secondary" className="px-4 py-2">
              <CalendarDays className="mr-2 h-4 w-4" />
              Admission Deadline: Chaitra 30, 2083
            </Badge>
          </div>
        </div>
      </section>

      {/* ================= MAP + FORM SECTION ================= */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* LEFT MAP */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Visit Our School</h2>

              <div className="overflow-hidden rounded-2xl border shadow-sm">
                <iframe
                  src="https://maps.google.com/maps?q=Kathmandu%20Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="h-[400px] w-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <div className="mt-6 space-y-4">
                {contactInfo.map((item) => (
                  <ContactItem key={item.id} item={item} />
                ))}
              </div>

              <Button variant="outline" className="mt-6 w-full sm:w-auto">
                <MapPin className="mr-2 h-4 w-4" />
                Get Directions
              </Button>
            </div>

            {/* RIGHT FORM */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold">Admission Inquiry Form</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form and our admission team will contact you.
                </p>

                <form className="mt-8 space-y-5">
                  <InputField
                    label="Student Name"
                    placeholder="Enter student name"
                  />

                  <InputField
                    label="Parent Name"
                    placeholder="Enter parent name"
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <InputField
                      label="Phone Number"
                      type="tel"
                      placeholder="98XXXXXXXX"
                    />

                    <InputField
                      label="Grade Applying For"
                      placeholder="e.g., Grade 8"
                    />
                  </div>

                  <InputField
                    label="Email Address"
                    type="email"
                    placeholder="your@email.com"
                  />

                  <TextAreaField
                    label="Message"
                    rows={4}
                    placeholder="Any questions or additional information..."
                  />

                  <Button className="w-full rounded-xl py-6">
                    Submit Admission Request
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ================= ADMISSION PROCESS STEPS ================= */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Admission Process</h2>
            <p className="mt-3 text-muted-foreground">
              Follow these simple steps to enroll your child at our school.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { step: "1", title: "Fill Application", description: "Complete the admission form online or at school." },
              { step: "2", title: "Submit Documents", description: "Provide required documents for verification." },
              { step: "3", title: "Entrance Evaluation", description: "Student assessment and interaction." },
              { step: "4", title: "Confirmation", description: "Secure your child's seat and complete enrollment." },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                  {item.step}
                </div>
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[30%] border-t-2 border-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold">Secure Your Child's Future Today</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our learning community and provide your child with
            excellent educational opportunities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full px-8">
              Contact Admission Office
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>

          <div className="mt-6 flex justify-center gap-6 text-sm text-muted-foreground">
            <span>📞 +977 98XXXXXXXX</span>
            <span>✉️ info@school.com</span>
          </div>
        </div>
      </section>
    </main>
  );
}