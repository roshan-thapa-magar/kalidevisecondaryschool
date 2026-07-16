import Hero from "@/components/school/contact/Hero";
import {ContactInfo} from "@/components/school/contact/ContactInfo";
import {VisitUs} from "@/components/school/contact/VisitUs";
import {ContactForm} from "@/components/school/contact/ContactForm";
import{ FAQ} from "@/components/school/contact/FAQ";
import {SocialMedia} from "@/components/school/contact/SocialMedia";
import {CallToAction} from "@/components/school/contact/CallToAction";

export default function ContactPage() {
  return (
    <main>
      <Hero />

      <ContactInfo />

      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <VisitUs />
            <ContactForm />
          </div>
        </div>
      </section>

      <FAQ />

      <SocialMedia />

      <CallToAction />
    </main>
  );
}