import Hero from "@/components/school/about/Hero";
import OurStory from "@/components/school/about/OurStory";
import PrincipalMessage from "@/components/school/about/PrincipalMessage";
import ChairpersonMessage from "@/components/school/about/ChairpersonMessage";
import VisionMission from "@/components/school/about/VisionMission";
import CoreValues from "@/components/school/about/CoreValues";
import TeachersPreview from "@/components/school/about/TeachersPreview";
import Facilities from "@/components/school/about/Facilities";

export default function AboutPage() {
  return (
    <>
      <Hero/>
      
      <OurStory/>

      {/* Principal Section */}
      <PrincipalMessage/>

      {/* Chairperson Section */}
      <ChairpersonMessage/>

      {/* Vision & Mission Section */}
      <VisionMission/>


      {/* Core Values Section */}
      <CoreValues/>

      {/* Teacher Preview */}
      <TeachersPreview/>

      {/* Facilities Section */}
      <Facilities/>
    </>
  );
}