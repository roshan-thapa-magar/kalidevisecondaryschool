"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function AdmissionForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    // TODO: Submit form

    setTimeout(() => {
      setLoading(false);
      alert("Admission inquiry submitted successfully.");
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">
          Admission Inquiry
        </CardTitle>

        <CardDescription>
          Fill out the form below and our admission office will contact you
          shortly.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Student Name */}
          <div className="space-y-2">
            <Label htmlFor="studentName">
              Student Name
            </Label>

            <Input
              id="studentName"
              type="text"
              placeholder="Enter student's full name"
              required
            />
          </div>

          {/* Parent Name */}
          <div className="space-y-2">
            <Label htmlFor="parentName">
              Parent / Guardian Name
            </Label>

            <Input
              id="parentName"
              type="text"
              placeholder="Enter parent or guardian name"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">
              Email Address
            </Label>

            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone Number
            </Label>

            <Input
              id="phone"
              type="tel"
              placeholder="+977 98XXXXXXXX"
              required
            />
          </div>

          {/* Grade */}
          <div className="space-y-2">
            <Label htmlFor="grade">
              Applying For
            </Label>

            <select
              id="grade"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Select Grade</option>
              <option>ECD</option>
              <option>Grade 1</option>
              <option>Grade 2</option>
              <option>Grade 3</option>
              <option>Grade 4</option>
              <option>Grade 5</option>
              <option>Grade 6</option>
              <option>Grade 7</option>
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
              <option>Grade 11</option>
              <option>Grade 12</option>
            </select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">
              Message
            </Label>

            <Textarea
              id="message"
              rows={5}
              placeholder="Write your inquiry..."
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Inquiry
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}