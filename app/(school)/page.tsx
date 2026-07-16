import Hero from '@/components/school/home/Hero'
import SchoolLife from "@/components/school/home/SchoolLife";
import SchoolAtAGlance from "@/components/school/home/SchoolAtAGlance";
import WhyChooseUs from "@/components/school/home/WhyChooseUs";
import LatestNotices from "@/components/school/home/LatestNotices";
import UpcomingEvents from "@/components/school/home/UpcomingEvents";
import GalleryPreview from "@/components/school/home/GalleryPreview";
import VisitUs from "@/components/school/home/VisitUs";
import CallToAction from "@/components/school/home/CallToAction";
// ================= MAIN COMPONENT =================
export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* ================= HERO ================= */}
      <Hero/>
      {/* ================= SCHOOL OVERVIEW ================= */}
      <SchoolLife/>
      {/* ================= SCHOOL AT A GLANCE ================= */}
      <SchoolAtAGlance/>

      {/* ================= WHY CHOOSE US ================= */}
      <WhyChooseUs/>

      {/* ================= LATEST NEWS ================= */}
      <LatestNotices/>

      {/* ================= UPCOMING EVENTS ================= */}
      <UpcomingEvents/>

      {/* ================= GALLERY PREVIEW ================= */}
      <GalleryPreview/>

      {/* ================= MAP & CONTACT ================= */}
      <VisitUs/>

      {/* ================= CTA ================= */}
      <CallToAction/>
    </main>
  );
}