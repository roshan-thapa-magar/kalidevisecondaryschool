import Hero from "@/components/school/acedemics/Hero";
import AcademicOverview from "@/components/school/acedemics/AcademicOverview";
import AcademicPrograms from "@/components/school/acedemics/AcademicPrograms";
import Curriculum from "@/components/school/acedemics/Curriculum";
import ClassRoutine from "@/components/school/acedemics/ClassRoutine";
import ExamRoutine from "@/components/school/acedemics/ExamRoutine";
import AcademicCalendar from "@/components/school/acedemics/AcademicCalendar";
import Results from "@/components/school/acedemics/Results";
import TeachingMethodology from "@/components/school/acedemics/TeachingMethodology";
import EnrichmentActivities from "@/components/school/acedemics/EnrichmentActivities";

export default function AcademicsHero() {
  return (
    <>
      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= ACADEMIC OVERVIEW ================= */}
      <AcademicOverview />

      {/* ================= ACADEMIC PROGRAMS ================= */}
      <AcademicPrograms />

      {/* ================= CURRICULUM ================= */}
      <Curriculum />

      {/* ================= CLASS ROUTINE ================= */}
      <ClassRoutine />

      {/* ================= EXAM ROUTINE ================= */}
      <ExamRoutine />

      {/* ================= ACADEMIC CALENDAR ================= */}
      <AcademicCalendar />

      {/* ================= SEE RESULTS ================= */}
      <Results/>

      {/* ================= TEACHING METHODOLOGY ================= */}
      <TeachingMethodology/>

      {/* ================= EXTRACURRICULAR ACTIVITIES ================= */}
      <EnrichmentActivities/>
    </>
  );
}