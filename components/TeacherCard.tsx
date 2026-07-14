import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface TeacherCardProps {
    name: string;
    designation: string;
    image: string;
    badge?: string;
}

export default function TeacherCard({
    name,
    designation,
    image,
    badge,
}: TeacherCardProps) {
    return (
        <div className="group mx-auto w-full max-w-[350px]">
            <div
                className="relative overflow-hidden  bg-muted shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl "
                style={{
                    borderRadius: "100% 100% 0 0 / 12% 12% 0 0",
                    clipPath:
                        "polygon(5% 0%,95% 0%,100% 5%,100% 92%,50% 100%,0% 92%,0% 5%)",
                }}
            >
                {/* Badge */}
                {badge && (
                    <Badge className="absolute left-6 top-6 z-20 rounded-md">
                        {badge}
                    </Badge>
                )}

                {/* Image */}
                <div className="relative flex h-[420px] items-end justify-center pt-10">
                    <Image
                        src={image}
                        alt={name}
                        width={500}
                        height={700}
                        priority
                        className="h-full w-auto object-contain transition duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Info */}
                <div className="px-8 pb-10 text-center">
                    <h3 className="text-xl font-semibold">
                        {name}
                    </h3>

                    <div className="my-6 h-px bg-slate-400" />

                    <p className="text-base uppercase tracking-wider">
                        {designation}
                    </p>
                </div>
            </div>
        </div>
    );
}