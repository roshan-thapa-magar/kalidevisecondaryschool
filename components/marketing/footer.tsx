import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  ArrowRight,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

// ================= DATA =================
const quickLinks = [
  { id: 1, label: "About Us", href: "/about" },
  { id: 2, label: "Teachers", href: "/teachers" },
  { id: 3, label: "Admissions", href: "/admission" },
  { id: 4, label: "Gallery", href: "/gallery" },
  { id: 5, label: "Notices", href: "/notices" },
  { id: 6, label: "Contact", href: "/contact" },
  { id: 7, label: "Academics", href: "/academics" },
  { id: 8, label: "Events", href: "/events" },
];

const socialLinks = [
  { id: 1, icon: FaFacebookF, label: "Facebook", href: "https://facebook.com" },
  { id: 2, icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
  { id: 3, icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { id: 4, icon: FaTwitter, label: "Twitter", href: "https://twitter.com" },
];

const contactInfo = [
  { id: 1, icon: MapPin, text: "Gorkha, Nepal" },
  { id: 2, icon: Phone, text: "+977-98XXXXXXXX" },
  { id: 3, icon: Mail, text: "info@kdss.edu.np" },
  { id: 4, icon: Clock, text: "Sun – Fri\n10:00 AM – 4:00 PM" },
];

const weeklyHours = [
  { day: "Sunday", hours: "10 AM – 4 PM" },
  { day: "Monday", hours: "10 AM – 4 PM" },
  { day: "Tuesday", hours: "10 AM – 4 PM" },
  { day: "Wednesday", hours: "10 AM – 4 PM" },
  { day: "Thursday", hours: "10 AM – 4 PM" },
  { day: "Friday", hours: "10 AM – 4 PM" },
  { day: "Saturday", hours: "Closed", isClosed: true },
];

// ================= COMPONENTS =================
const SocialIcon = ({ item }: { item: typeof socialLinks[0] }) => {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.label}
      className="rounded-lg border p-3 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1"
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
};

const QuickLinkItem = ({ link }: { link: typeof quickLinks[0] }) => (
  <li>
    <Link
      href={link.href}
      className="flex items-center gap-2 text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 group"
    >
      <ChevronRight className="h-4 w-4 transition-transform group-hover:scale-125" />
      <span>{link.label}</span>
    </Link>
  </li>
);

const ContactItem = ({ item }: { item: typeof contactInfo[0] }) => {
  const Icon = item.icon;
  return (
    <div className="flex gap-3 group">
      <Icon className="mt-1 h-5 w-5 shrink-0 transition-colors group-hover:text-primary" />
      <p className="text-muted-foreground whitespace-pre-line">{item.text}</p>
    </div>
  );
};

const HourItem = ({ day, hours, isClosed = false }: { day: string; hours: string; isClosed?: boolean }) => (
  <div className={`flex justify-between text-sm ${isClosed ? 'text-destructive/60' : ''}`}>
    <span>{day}</span>
    <span className={isClosed ? 'font-medium' : ''}>{hours}</span>
  </div>
);

// ================= MAIN COMPONENT =================
export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* ================= SCHOOL INFO ================= */}
          <div>
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative overflow-hidden rounded-lg transition-transform group-hover:scale-105">
                <Image
                  src="/images/logo.jpg"
                  alt="Kali Devi Secondary School Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold leading-tight">
                  Kali Devi Secondary School
                </h3>
                <p className="text-sm text-muted-foreground">
                  Government of Nepal
                </p>
              </div>
            </Link>

            <div className="mt-5 flex items-start gap-2">
              <div className="h-1 w-12 rounded-full bg-primary" />
              <p className="text-sm leading-7 text-muted-foreground">
                Providing quality education through academic excellence,
                discipline, creativity, and lifelong learning.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <SocialIcon key={item.id} item={item} />
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-xs text-muted-foreground">Active</span>
              </div>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">Est. 2060 B.S.</span>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="mt-6 h-1 w-12 rounded-full bg-primary" />
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <QuickLinkItem key={link.id} link={link} />
              ))}
            </ul>
          </div>

          {/* ================= CONTACT INFO ================= */}
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="mt-6 h-1 w-12 rounded-full bg-primary" />
            <div className="mt-6 space-y-4">
              {contactInfo.map((item) => (
                <ContactItem key={item.id} item={item} />
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
            >
              View Full Contact
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* ================= OFFICE HOURS ================= */}
          <div>
            <h3 className="text-lg font-semibold">Office Hours</h3>
            <div className="mt-6 h-1 w-12 rounded-full bg-primary" />
            <div className="mt-6 rounded-xl border bg-background p-6 shadow-sm">
              <div className="space-y-3">
                {weeklyHours.map((item, index) => (
                  <HourItem
                    key={index}
                    day={item.day}
                    hours={item.hours}
                    isClosed={item.isClosed}
                  />
                ))}
              </div>

              <div className="mt-4 pt-4 border-t text-xs text-muted-foreground">
                <p>📞 Emergency: +977-98XXXXXXXX</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} Kali Devi Secondary School. All
            Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-foreground transition">
              Privacy Policy
            </Link>
            <span className="hidden md:inline">•</span>
            <Link href="/terms" className="hover:text-foreground transition">
              Terms of Service
            </Link>
            <span className="hidden md:inline">•</span>
            <p>
              Designed with ❤️ by{" "}
              <Link
                href="https://roshanthapamagar.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary transition hover:underline"
              >
                Roshan Thapa Magar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}