// app/contact/page.tsx

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// ================= DATA =================
const contactInfo = [
  {
    id: 1,
    icon: FaMapMarkerAlt,
    title: "Address",
    details: ["Kathmandu, Nepal"],
    color: "text-primary",
  },
  {
    id: 2,
    icon: FaPhoneAlt,
    title: "Phone",
    details: ["+977 98XXXXXXXX", "+977 01-4XXXXXX"],
    color: "text-primary",
  },
  {
    id: 3,
    icon: FaEnvelope,
    title: "Email",
    details: ["info@school.com", "admission@school.com"],
    color: "text-primary",
  },
  {
    id: 4,
    icon: FaClock,
    title: "Office Hours",
    details: ["Sun - Fri : 10:00 AM - 5:00 PM", "Saturday : Closed"],
    color: "text-primary",
  },
];

const socialMedia = [
  { id: 1, icon: FaFacebookF, label: "Facebook", url: "https://facebook.com" },
  { id: 2, icon: FaYoutube, label: "YouTube", url: "https://youtube.com" },
  { id: 3, icon: FaInstagram, label: "Instagram", url: "https://instagram.com" },
  { id: 4, icon: FaTwitter, label: "Twitter", url: "https://twitter.com" },
];

const mapEmbedUrl =
  "https://maps.google.com/maps?q=Kathmandu%20Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed";

// ================= COMPONENTS =================
const ContactCard = ({ item }: { item: typeof contactInfo[0] }) => {
  const Icon = item.icon;
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <Icon className="text-primary" size={32} />
          {item.id === 1 && (
            <Badge variant="secondary" className="rounded-full">
              Main
            </Badge>
          )}
        </div>
        <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
        <div className="mt-2 space-y-1">
          {item.details.map((detail, index) => (
            <p key={index} className="text-sm text-muted-foreground">
              {detail}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SocialButton = ({ item }: { item: typeof socialMedia[0] }) => {
  const Icon = item.icon;
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full h-12 w-12 transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white hover:border-primary"
      aria-label={item.label}
      
    >
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <Icon size={20} />
      </a>
    </Button>
  );
};

const ContactInfoItem = ({
  icon: Icon,
  text,
}: {
  icon: any;
  text: string;
}) => (
  <div className="flex items-center gap-3">
    <Icon className="text-primary" size={18} />
    <span className="text-sm text-muted-foreground">{text}</span>
  </div>
);

const InputField = ({
  label,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) => (
  <div>
    <label className="text-sm font-medium">
      {label}
      {required && <span className="text-destructive ml-1">*</span>}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className="mt-2 w-full rounded-xl border bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition-all"
    />
  </div>
);

const TextAreaField = ({
  label,
  rows = 5,
  placeholder,
  required = false,
}: {
  label: string;
  rows?: number;
  placeholder: string;
  required?: boolean;
}) => (
  <div>
    <label className="text-sm font-medium">
      {label}
      {required && <span className="text-destructive ml-1">*</span>}
    </label>
    <textarea
      rows={rows}
      placeholder={placeholder}
      required={required}
      className="mt-2 w-full rounded-xl border bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition-all resize-y"
    />
  </div>
);

// ================= MAIN COMPONENT =================
export default function ContactPage() {
  return (
    <main>
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-background py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto max-w-7xl px-6 text-center relative z-10">
          <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/5 px-6 py-2 text-primary">
            Contact Us
          </Badge>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Get In Touch With Our School
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            We are always happy to assist students, parents, and visitors.
            Contact us for admission, academic information, or any queries.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full px-8">
              <FaPhoneAlt className="mr-2 h-4 w-4" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              <FaEnvelope className="mr-2 h-4 w-4" />
              Send Email
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* ================= CONTACT INFORMATION ================= */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => (
              <ContactCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= MAP + FORM ================= */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* LEFT MAP */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Find Our Location</h2>

              <div className="overflow-hidden rounded-2xl border shadow-sm">
                <iframe
                  src={mapEmbedUrl}
                  className="h-[450px] w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  title="School Location Map"
                />
              </div>

              <div className="mt-6 space-y-4">
                <ContactInfoItem icon={FaMapMarkerAlt} text="Kathmandu, Nepal" />
                <ContactInfoItem icon={FaPhoneAlt} text="+977 98XXXXXXXX" />
                <ContactInfoItem icon={FaEnvelope} text="info@school.com" />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="outline" className="flex-1 sm:flex-none">
                  <FaMapMarkerAlt className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
                <Button variant="outline" className="flex-1 sm:flex-none">
                  <FaPhoneAlt className="mr-2 h-4 w-4" />
                  Call School
                </Button>
              </div>
            </div>

            {/* RIGHT CONTACT FORM */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold">Send Us A Message</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill the form and our team will contact you soon.
                </p>

                <form className="mt-8 space-y-5">
                  <InputField
                    label="Full Name"
                    placeholder="Enter your name"
                    required
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <InputField
                      label="Phone"
                      type="tel"
                      placeholder="98XXXXXXXX"
                      required
                    />
                    <InputField
                      label="Email"
                      type="email"
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>

                  <InputField
                    label="Subject"
                    placeholder="Admission / Inquiry / Feedback"
                    required
                  />

                  <TextAreaField
                    label="Message"
                    rows={5}
                    placeholder="Write your message..."
                    required
                  />

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <input type="checkbox" id="consent" className="rounded" />
                    <label htmlFor="consent">
                      I agree to the processing of my personal data for this inquiry.
                    </label>
                  </div>

                  <Button className="w-full rounded-xl py-6">
                    <FaEnvelope className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ================= FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="rounded-full">
              FAQ
            </Badge>
            <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-3 text-muted-foreground">
              Quick answers to common queries about our school.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What are the school timings?",
                a: "School hours are from 10:00 AM to 4:00 PM, Sunday through Friday. Saturday is a holiday.",
              },
              {
                q: "How can I apply for admission?",
                a: "You can apply online through our admission portal or visit the school office to collect an application form.",
              },
              {
                q: "Is there a transportation facility?",
                a: "Yes, we provide safe and reliable transportation services for students from nearby areas.",
              },
              {
                q: "What extracurricular activities are available?",
                a: "We offer sports, cultural programs, science exhibitions, debate competitions, and various clubs.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-xl border bg-background p-6 transition hover:shadow-md">
                <h3 className="font-semibold text-lg">{faq.q}</h3>
                <p className="mt-2 text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SOCIAL MEDIA ================= */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <Badge variant="outline" className="rounded-full">
            Connect With Us
          </Badge>

          <h2 className="mt-4 text-3xl font-bold">Follow Us</h2>

          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get latest school news and updates through social media.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            {socialMedia.map((item) => (
              <SocialButton key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>📱 Follow us for daily updates</span>
            <span>📸 See school events and activities</span>
            <span>📢 Stay informed about announcements</span>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <div className="rounded-2xl border bg-background/50 p-8 md:p-12">
            <h2 className="text-3xl font-bold">Visit Our School</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              We welcome parents and students to visit our campus and experience
              our learning environment firsthand.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full px-8">
                <FaMapMarkerAlt className="mr-2 h-4 w-4" />
                Schedule a Visit
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                <FaPhoneAlt className="mr-2 h-4 w-4" />
                Call for Appointment
              </Button>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="p-3 rounded-lg bg-primary/5">
                <p className="font-semibold">Location</p>
                <p className="text-muted-foreground">Kathmandu, Nepal</p>
              </div>
              <div className="p-3 rounded-lg bg-primary/5">
                <p className="font-semibold">Phone</p>
                <p className="text-muted-foreground">+977 98XXXXXXXX</p>
              </div>
              <div className="p-3 rounded-lg bg-primary/5">
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground">info@school.com</p>
              </div>
              <div className="p-3 rounded-lg bg-primary/5">
                <p className="font-semibold">Hours</p>
                <p className="text-muted-foreground">10 AM - 5 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}