// "use client";

// import React, { useState } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// interface FAQ {
//   question: string;
//   answer: string;
// }

// interface FAQAccordionProps {
//   faqs: FAQ[];
// }

// const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
//   return (
//     <Accordion type="single" collapsible className="w-full">
//       {faqs.map((faq, index) => (
//         <AccordionItem value={`item-${index}`} key={index}>
//           <AccordionTrigger className="text-left">
//             {faq.question}
//           </AccordionTrigger>
//           <AccordionContent>{faq.answer}</AccordionContent>
//         </AccordionItem>
//       ))}
//     </Accordion>
//   );
// };

// const Faq: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<"chef" | "user">("chef");

//   const chefFAQs: FAQ[] = [
//     {
//       question: "How to join and become a chef? ",
//       answer:
//         "To join as a chef, simply click on the Become a Chef button located at the top right corner of our website and submit your application. ",
//     },
//     {
//       question: "How does the profit works? ",
//       answer:
//         "Chefs are responsible for creating their own menus. The menu price should include the cost of ingredients. Your profit for each dish will be the menu price minus the cost of ingredients.",
//     },
//     {
//       question: "Ingredients ",
//       answer:
//         "All ingredients served should be fresh and either purchased recently or on the day of the service.",
//     },
//     {
//       question: "Menu creation",
//       answer:
//         "Menu creation is entirely at your discretion. You may choose to specialize in a specific cuisine or offer a mix of cuisines on your profile. Keep in mind the cost of ingredients when designing your menu. You can mix and match ingredients to save on costs. We aim to empower your menu creation, encouraging creativity while maintaining a casual and budget-friendly approach.",
//     },
//   ];

//   const userFAQs: FAQ[] = [
//     {
//       question: "How will the chef clean up once the meal is complete?",
//       answer:
//         "Once the chef has finished cooking and the meal has been served, they will thoroughly clean the kitchen, including all pots and pans used, restoring it to its original condition prior to their arrival. The service concludes once the chef has completed the cleanup, provided there are no additional plates. Any extra plates and leftover food will be the responsibility of the customer.",
//     },
//     {
//       question: "How long does a typical private chef service last?",
//       answer:
//         "A typical private chef service lasts around 2-3 hours, during which the chef arrives before the scheduled time to start cooking, serves the food, and then cleans up the kitchen. ",
//     },
//     {
//       question: "Allergies",
//       answer:
//         "If you have any allergies, kindly indicate them in the Note section. ",
//     },
//     {
//       question: "Payment",
//       answer:
//         "All payments shall be remitted upon confirmation through our platform. Currently, we accept payments in Cash (paid directly to the chef), Venmo, or Zelle. Please note that 100% of the tips will be allocated to the chef. ",
//     },
//     {
//       question: " Cancellation Policy ",
//       answer:
//         "Cancellations made more than 24 hours prior to the scheduled service will be eligible for a full refund, while cancellations made less than 24 hours before the scheduled service will not be eligible for a refund. In the event that a chef cancels the service less than 24 hours before the scheduled time, a full refund will be issued.",
//     },
//   ];

//   return (
//     <div id="faq" className=" max-w-6xl mx-auto w-full pb-8 px-4 md:px-0">
//       <Tabs
//         value={activeTab}
//         onValueChange={(value) => setActiveTab(value as "chef" | "user")}
//         className="w-full"
//       >
//         <TabsList className="grid w-full grid-cols-2 mb-4">
//           <TabsTrigger value="user">Customer FAQs</TabsTrigger>
//           <TabsTrigger value="chef">Chef FAQs</TabsTrigger>
//         </TabsList>
//         <TabsContent value="chef" className="w-full">
//           <FAQAccordion faqs={chefFAQs} />
//         </TabsContent>
//         <TabsContent value="user" className="w-full">
//           <FAQAccordion faqs={userFAQs} />
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default Faq;

"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger className="text-left text-lg font-medium">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const Faq: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"chef" | "user">("user");

  const chefFAQs: FAQ[] = [
    {
      question: "How do I join and become a chef?",
      answer:
        "To join as a chef, simply click on the 'Become a Chef' button located at the top right corner of our website and submit your application.",
    },
    {
      question: "How does the profit system work?",
      answer:
        "Chefs are responsible for creating their own menus. The menu price should include the cost of ingredients. Your profit for each dish will be the menu price minus the cost of ingredients.",
    },
    {
      question: "What are the requirements for ingredients?",
      answer:
        "All ingredients served should be fresh and either purchased recently or on the day of the service.",
    },
    {
      question: "How flexible is menu creation?",
      answer:
        "Menu creation is entirely at your discretion. You may choose to specialize in a specific cuisine or offer a mix of cuisines on your profile. Keep in mind the cost of ingredients when designing your menu. You can mix and match ingredients to save on costs. We aim to empower your menu creation, encouraging creativity while maintaining a casual and budget-friendly approach.",
    },
  ];

  const userFAQs: FAQ[] = [
    {
      question: "How will the chef clean up after the meal?",
      answer:
        "Once the chef has finished cooking and the meal has been served, they will thoroughly clean the kitchen, including all pots and pans used, restoring it to its original condition prior to their arrival. The service concludes once the chef has completed the cleanup, provided there are no additional plates. Any extra plates and leftover food will be the responsibility of the customer.",
    },
    {
      question: "How long does a typical private chef service last?",
      answer:
        "A typical private chef service lasts around 2-3 hours, during which the chef arrives before the scheduled time to start cooking, serves the food, and then cleans up the kitchen.",
    },
    {
      question: "How do I inform about allergies?",
      answer:
        "If you have any allergies, kindly indicate them in the Note section when booking your service.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "All payments shall be remitted upon confirmation through our platform. Currently, we accept payments in Cash (paid directly to the chef), Venmo, or Zelle. Please note that 100% of the tips will be allocated to the chef.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Cancellations made more than 24 hours prior to the scheduled service will be eligible for a full refund, while cancellations made less than 24 hours before the scheduled service will not be eligible for a refund. In the event that a chef cancels the service less than 24 hours before the scheduled time, a full refund will be issued.",
    },
  ];

  return (
    <div id="faq" className="  py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to common questions about our private chef services
          </p>
        </div>
        <div
          id="faq"
          className=" max-w-6xl mx-auto w-full pb-8 px-4 md:px-0 py-8 lg:py-12"
        >
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "chef" | "user")}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="user">Customer FAQs</TabsTrigger>
              <TabsTrigger value="chef">Chef FAQs</TabsTrigger>
            </TabsList>
            <TabsContent value="chef" className="w-full">
              <FAQAccordion faqs={chefFAQs} />
            </TabsContent>
            <TabsContent value="user" className="w-full">
              <FAQAccordion faqs={userFAQs} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Faq;
