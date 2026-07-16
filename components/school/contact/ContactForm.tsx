// contact/ContactForm.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-3xl px-4">

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Send Us a Message
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form className="space-y-5">

              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Full Name
                </label>

                <Input
                  placeholder="Enter your full name"
                  type="text"
                />
              </div>


              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Email Address
                </label>

                <Input
                  placeholder="Enter your email"
                  type="email"
                />
              </div>


              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Phone Number
                </label>

                <Input
                  placeholder="Enter your phone number"
                  type="tel"
                />
              </div>


              {/* Subject */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Subject
                </label>

                <Input
                  placeholder="Enter subject"
                  type="text"
                />
              </div>


              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Message
                </label>

                <Textarea
                  placeholder="Write your message here..."
                  rows={5}
                />
              </div>


              {/* Submit */}
              <Button className="w-full">
                Send Message
              </Button>

            </form>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}