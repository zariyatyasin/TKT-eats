"use client";
import Connectus from "../connectus/connect-us";
import Discoverus from "../discoverus/discover-us";
import Faq from "../faq/faq";
import Footer from "../footer/footer";
import Header from "../header/header";
import Hero from "../hero/hero";
import Howitswork from "../how-its-work/how-its-work";
import Partners from "../partners/partners";
import Whyus from "../why-us/why-us";
import { motion, useScroll } from "framer-motion";

export default function HomeDemo1() {
  return (
    <div className="min-h-screen bg-slate-50 ">
      <Header />
      <main>
        <Hero />
        <Partners />
        {/* <Discoverus /> */}
        <Howitswork />
        <Whyus />
        <Faq />
        {/* <Connectus /> */}
        <Footer />
      </main>
    </div>
  );
}
