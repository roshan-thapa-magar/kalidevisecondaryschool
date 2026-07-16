// contact/FAQ.tsx

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How can I contact Kali Devi Secondary School?",
    answer:
      "You can contact us through phone, email, or by visiting our school campus in Gorkha, Nepal.",
  },
  {
    question: "What grades does the school offer?",
    answer:
      "Kali Devi Secondary School provides education from Early Childhood Development (ECD) to Grade 12.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "Parents and students can visit the admission section of our website or contact the school office for admission details.",
  },
  {
    question: "What are the school office hours?",
    answer:
      "The school office is open from Sunday to Friday during regular working hours.",
  },
  {
    question: "Does the school provide transportation facilities?",
    answer:
      "Transportation facilities are available depending on student requirements and school arrangements.",
  },
  {
    question: "How can parents communicate with teachers?",
    answer:
      "Parents can communicate with teachers through school meetings, direct contact, and official school channels.",
  },
];

export function FAQ() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-3xl px-4">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-muted-foreground">
            Find answers to common questions about our school.
          </p>
        </div>


        {/* Accordion */}
        <Accordion
          className="w-full"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
            >
              <AccordionTrigger>
                {item.question}
              </AccordionTrigger>

              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}