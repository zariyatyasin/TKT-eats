import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    // <section className="container mx-auto py-12 px-6">
    //   <h2 className="text-2xl font-bold mb-4">
    //     Frequently Asked Questions (FAQ)
    //   </h2>
    //   <p className="mb-6">
    //     Explore Common Queries About FreshFarm's Fresh and Organic Vegetables
    //   </p>
    //   <div className="space-y-4">
    //     <div className="border p-4 rounded">
    //       <h3 className="text-lg font-bold">
    //         What sets FreshFarm vegetables apart?
    //       </h3>
    //       <p>
    //         FreshFarm vegetables stand out because they are locally grown in our
    //         own gardens, follow organic farming practices, and are harvested at
    //         the peak of freshness for the most vibrant flavor.
    //       </p>
    //     </div>
    //     <div className="border p-4 rounded">
    //       <h3 className="text-lg font-bold">
    //         How do you maintain the freshness of your vegetables?
    //       </h3>
    //       <p>
    //         We maintain the freshness of our vegetables by harvesting them at
    //         the peak of ripeness and delivering them directly to your doorstep
    //         within hours of picking.
    //       </p>
    //     </div>
    //     <div className="border p-4 rounded">
    //       <h3 className="text-lg font-bold">
    //         How can I place an order for FreshFarm vegetables?
    //       </h3>
    //       <p>
    //         Placing an order is easy! Simply navigate our website, choose your
    //         selection, customize your order, and confirm your purchase.
    //       </p>
    //     </div>
    //     <div className="border p-4 rounded">
    //       <h3 className="text-lg font-bold">
    //         Do you offer international shipping?
    //       </h3>
    //       <p>
    //         Yes, we offer international shipping to 28 countries. Please check
    //         our shipping policy for more details.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="text-center mt-6">
    //     <button className="bg-black text-white py-2 px-4 rounded">
    //       Contact Customer Service
    //     </button>
    //   </div>
    // </section>
    <section className="py-12 md:py-24 lg:py-32">
      <div className=" max-w-7xl mx-auto px-4 md:px-6 grid gap-8  ">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="question-1">
              <AccordionTrigger>
                <h3 className="text-xl font-bold">How do I book a chef?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  To book a chef, simply browse our selection of top-rated
                  chefs, select your preferred chef and event details, and
                  submit your request. Our team will handle the rest and confirm
                  your booking.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-2">
              <AccordionTrigger>
                <h3 className="text-xl font-bold">
                  What types of events do you cater to?
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  We cater to a wide range of events, including private parties,
                  corporate functions, cooking classes, and more. Our chefs are
                  skilled in various cuisines and can accommodate any dietary
                  requirements.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-3">
              <AccordionTrigger>
                <h3 className="text-xl font-bold">
                  Do you offer any discounts or promotions?
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Yes, we offer various discounts and promotions throughout the
                  year. Be sure to check our website or sign up for our
                  newsletter to stay up-to-date on the latest offers.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-4">
              <AccordionTrigger>
                <h3 className="text-xl font-bold">
                  How do I become a chef on your platform?
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  If you're a talented chef interested in joining our platform,
                  please visit our "Become a Chef" page and fill out the
                  application form. Our team will review your credentials and
                  get in touch if you're a good fit.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
