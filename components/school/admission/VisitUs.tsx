import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

const contactInfo = [
  {
    id: 1,
    icon: MapPin,
    title: "School Address",
    value: "Gorkha Municipality, Gorkha, Nepal",
  },
  {
    id: 2,
    icon: Phone,
    title: "Phone",
    value: "+977-9800000000",
  },
  {
    id: 3,
    icon: Mail,
    title: "Email",
    value: "info@kalidevischool.edu.np",
  },
  {
    id: 4,
    icon: Clock,
    title: "Office Hours",
    value: "Sunday – Friday, 10:00 AM – 4:00 PM",
  },
];

function ContactItem({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>

      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-muted-foreground">{value}</p>
      </div>
    </div>
  );
}

export default function VisitUs() {
  return (
    <div className="space-y-6">
      {/* Google Map */}
      <div className="overflow-hidden rounded-2xl border">
        <iframe
          src="YOUR_GOOGLE_MAP_EMBED_URL"
          width="100%"
          height="420"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        />
      </div>

      {/* Contact Information */}
      <Card>
        <CardContent className="space-y-8 p-8">
          <div>
            <h2 className="text-2xl font-bold">
              Visit Our School
            </h2>

            <p className="mt-2 text-muted-foreground">
              We welcome parents and students to visit our campus.
              Contact us for admission inquiries or schedule a school tour.
            </p>
          </div>

          {contactInfo.map((item) => (
            <ContactItem
              key={item.id}
              title={item.title}
              value={item.value}
              icon={item.icon}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}