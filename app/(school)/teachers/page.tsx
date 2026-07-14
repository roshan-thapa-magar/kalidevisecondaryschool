import { Metadata } from "next";
import TeacherCard from "@/components/TeacherCard";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Teachers & Staff | Kali Devi Secondary School",
  description:
    "Meet the dedicated teachers and staff of Kali Devi Secondary School.",
};

export default function TeachersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-muted/40 py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 rounded-full px-4 py-1">
              Our Faculty
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Teachers & Staff
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              Our experienced and dedicated educators are committed to
              nurturing knowledge, character, and lifelong learning for every
              student at Kali Devi Secondary School.
            </p>
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <TeacherCard
              name="Mr. Baburam Tamang"
              designation="Principal"
              image="/images/principal.png"
              badge="Principal"
            />

            {/* <TeacherCard
              name="Karuna Ale Magar"
              designation="Science Teacher"
              image="/images/gudiya.png"
            /> */}

            <TeacherCard
              name="Khusi Thapa Magar"
              designation="Science Teacher"
              image="/images/khusi.png"
            />


            <TeacherCard
              name="Roshan Thapa Magar"
              designation="Mathematics Teacher"
              image="/images/roshan.png"
            />

            <TeacherCard
              name="Karuna Gurung"
              designation="English Teacher"
              image="/images/madam.png"
            />
            <TeacherCard
              name="Khum B. Thapa Magar"
              designation="SMC Chairperson"
              image="/images/Chairperson.png"
              badge="Chairperson"
            />

            <TeacherCard
              name="Sarita Saru Magar"
              designation="Science Teacher"
              image="/images/sarita.png"
            />

            <TeacherCard
              name="Saran Thapa Magar"
              designation="Social Teacher"
              image="/images/saran.png"
            />

            <TeacherCard
              name="Kabita Thapa Magar"
              designation="Nepali Teacher"
              image="/images/kabita.png"
            />

            <TeacherCard
              name="Sundar Thapa Magar"
              designation="Nepali Teacher"
              image="/images/sundar.png"
            />
            <TeacherCard
              name="Dipa Thapa Magar"
              designation="Nepali Teacher"
              image="/images/dipa.png"
            />
            <TeacherCard
              name="Bimal Thapa Magar"
              designation="Math Member"
              image="/images/bimal.png"
            />
            <TeacherCard
              name="Manu Pulami Magar"
              designation="English Teacher"
              image="/images/manu.png"
            />


            <TeacherCard
              name="Padam Thapa Magar"
              designation="SMC Member"
              image="/images/padam.png"
              badge="Member"
            />

            <TeacherCard
              name="Emmaya Thapa Magar"
              designation="SMC Member"
              image="/images/Emmaya.png"
              badge="Member"
            />
            <TeacherCard
              name="Prashant Magar"
              designation="Social Teacher"
              image="/images/Prashant.png"
            />
            {/* <TeacherCard
              name="Karuna Gurung"
              designation="Social Teacher"
              image="/images/gurung.png"
            /> */}

            <TeacherCard
              name="Hom B. Thapa Magar"
              designation="Social Teacher"
              image="/images/hom.png"
            />

            <TeacherCard
              name="Pramish Pulami Magar"
              designation="First Boy"
              image="/images/pramish.png"
              badge="Student"
            />

            <TeacherCard
              name="Prem Pulami Magar"
              designation="Math Teacher"
              image="/images/prem.png"
            />

            <TeacherCard
              name="ThanMaya Magar"
              designation="SMC Member"
              image="/images/than.png"
              badge="Member"
            />
            <TeacherCard
              name="Sadir Pulami Magar"
              designation="First Student"
              image="/images/sadir.png"
              badge="Student"
            />

            {/* Add more teachers here */}
          </div>
        </div>
      </section>
    </>
  );
}