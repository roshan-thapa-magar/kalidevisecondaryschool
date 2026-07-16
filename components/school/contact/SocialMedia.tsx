// contact/SocialMedia.tsx

import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { Card, CardContent } from "@/components/ui/card";

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    link: "#",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    link: "#",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "#",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "#",
  },
];

export function SocialMedia() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Follow Us
          </h2>

          <p className="mt-3 text-muted-foreground">
            Stay connected with Kali Devi Secondary School through our social media platforms.
          </p>
        </div>


        {/* Social Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="transition hover:shadow-md">
                  <CardContent className="flex flex-col items-center gap-3 p-6">

                    <div className="rounded-full bg-muted p-4">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}