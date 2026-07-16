import { HeroSection } from "@/components/marketing/hero-section";

export default function Hero() {
  return (
    <HeroSection
      badge="Apply at"
      title="Kali Devi Secondary School"
      image="/images/admission.jpg"
      description={[
        "Start your child's educational journey with Kali Devi Secondary School, where academic excellence, character development, and lifelong learning go hand in hand.",
        "Our experienced teachers, student-centered learning approach, and supportive environment help every child develop knowledge, confidence, creativity, and leadership skills.",
        "Admissions are open for eligible students from ECD to Grade 12. We welcome parents to join our vibrant learning community and provide their children with a strong foundation for future success.",
      ]}
      primaryButton={{
        label: "Home",
        href: "/",
      }}
      secondaryButton={{
        label: "Admission",
        href: "/admission",
      }}
    />
  );
}