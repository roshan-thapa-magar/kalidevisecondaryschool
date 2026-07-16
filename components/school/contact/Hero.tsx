import { HeroSection } from "@/components/marketing/hero-section";

export default function Hero() {
  return (
    <HeroSection
      badge="Contact Us"
      title="Get In Touch With Our School"
      image="/images/contact.jpg"
      description={[
        "We are always happy to assist students, parents, and visitors. Contact Kali Devi Secondary School for admission inquiries, academic information, and general questions.",
        "Our school team is available to provide guidance, support, and information about our programs, facilities, and learning opportunities.",
        "Visit our campus or connect with us through phone, email, or social media. We look forward to welcoming you to our school community.",
      ]}
      primaryButton={{
        label: "Call Now",
        href: "tel:+9779800000000",
      }}
      secondaryButton={{
        label: "Send Email",
        href: "mailto:info@kalidevischool.edu.np",
      }}
    />
  );
}