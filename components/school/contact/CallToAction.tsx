// contact/CallToAction.tsx

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        <div className="rounded-2xl border bg-muted/50 p-8 text-center md:p-12">

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Have Questions? We Are Here to Help
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Whether you are a parent, student, or visitor, feel free to contact
            Kali Devi Secondary School. Our team is always ready to assist you.
          </p>


          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Button >
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </Button>


            <Button variant="outline" >
              <a href="tel:+9779800000000">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}