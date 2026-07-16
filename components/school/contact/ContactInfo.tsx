// contact/ContactInfo.tsx

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Address",
    details: "Kali Devi Secondary School, Gorkha, Nepal",
  },
  {
    icon: FaPhoneAlt,
    title: "Phone",
    details: "+977 98XXXXXXXX",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    details: "info@kalidevisecondaryschool.edu.np",
  },
  {
    icon: FaClock,
    title: "Office Hours",
    details: "Sunday - Friday: 10:00 AM - 4:00 PM",
  },
];

export function ContactInfo() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card key={index} className="h-full">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-muted p-4">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {item.details}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}