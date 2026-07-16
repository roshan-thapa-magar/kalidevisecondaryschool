import { HeroSection } from "@/components/marketing/hero-section";

export default function Hero() {
  return (
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
  );
}