"use client";

import Faq from "@/components/faq/faq";
import Whyus from "@/components/why-us/why-us";
import React from "react";

export default function Page() {
  return (
    <div className="mt-12 md:mt-0">
      <Whyus />
      <Faq />
    </div>
  );
}
