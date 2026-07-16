import Hero from "@/components/school/admission/Hero";
import AdmissionBanner from "@/components/school/admission/AdmissionBanner";
import AdmissionInfo from "@/components/school/admission/AdmissionInfo";
import RequiredDocuments from "@/components/school/admission/RequiredDocuments";
import VisitUs from "@/components/school/admission/VisitUs";
import AdmissionForm from "@/components/school/admission/AdmissionForm";
import AdmissionProcess from "@/components/school/admission/AdmissionProcess";
import CallToAction from "@/components/school/admission/CallToAction";

export default function AdmissionPage() {
  return (
    <main>
      <Hero />
      <AdmissionBanner />
      <AdmissionInfo />
      <RequiredDocuments />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <VisitUs />
            <AdmissionForm />
          </div>
        </div>
      </section>

      <AdmissionProcess />
      <CallToAction />
    </main>
  );
}