import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { HeroSection } from "@/components/marketing/hero-section";
import Hero from "@/components/school/notices/Hero";
import ImportantNotice from "@/components/school/notices/ImportantNotice";
import NoticeSearch from "@/components/school/notices/NoticeSearch";
import NoticeCategories from "@/components/school/notices/NoticeCategories";
import LatestNotices from "@/components/school/notices/LatestNotices";
import Documents from "@/components/school/notices/Documents";
import NoticeArchive from "@/components/school/notices/NoticeArchive";
import CallToAction from "@/components/school/home/CallToAction";

export default function NoticePage() {

  return (
    <main>
      {/* ================= HERO ================= */}
      <Hero/>

      {/* ================= IMPORTANT NOTICE ================= */}
      <ImportantNotice/>

      {/* ================= SEARCH ================= */}
      <NoticeSearch/>

      {/* ================= NOTICE CATEGORIES ================= */}
      <NoticeCategories/>

      {/* ================= LATEST NOTICES ================= */}
      <LatestNotices/>

      {/* ================= DOWNLOAD DOCUMENTS ================= */}
      <Documents/>

      {/* ================= ARCHIVE ================= */}
      <NoticeArchive/>

      {/* ================= CTA ================= */}
      <CallToAction/>
    </main>
  );
}