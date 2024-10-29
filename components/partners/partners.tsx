"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Partners() {
  return (
    <section id="partners" className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
            Our Support and Partners
          </h2>
          <p className="mx-auto max-w-[700px] text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We are proud to partner with leading schools and be featured in
            respected publications.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-8"
        >
          {/* new */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Card className="w-full max-w-sm">
              <CardContent className="p-6 space-y-4">
                <Link href="https://entrepreneurship.wsu.edu" className="block">
                  <Image
                    src="/wsu.png"
                    alt="Washington State University logo"
                    width={256}
                    height={256}
                    className="w-64 h-32 mx-auto rounded-lg object-contain"
                  />
                </Link>
                <p className="text-sm md:text-base text-muted-foreground text-center">
                  Click{" "}
                  <Link
                    href="https://catalog.wsu.edu/General/Academics/DegreeProgram/10062"
                    className="text-primary hover:underline"
                  >
                    here
                  </Link>{" "}
                  to learn what it&apos;s like to be an entrepreneur
                </p>
              </CardContent>
            </Card>
            <Card className="w-full max-w-sm">
              <CardContent className="p-6 space-y-4">
                <Link
                  href="https://voyagedenver.com/interview/community-highlights-meet-thekitchentable-of-thekitchentable"
                  className="block"
                >
                  <Image
                    src="https://res.cloudinary.com/ddrjnijut/image/upload/v1727365176/ngep287auj04ayeykfsf.png"
                    alt="VoyageDenver logo"
                    width={256}
                    height={256}
                    className="w-32 h-auto mx-auto rounded-lg object-contain"
                  />
                </Link>
                <p className="text-sm md:text-base text-muted-foreground text-center">
                  Discover more about our journey and mission in this insightful
                  article written by VoyageDenver.Click{" "}
                  <Link
                    href="https://voyagedenver.com/interview/community-highlights-meet-thekitchentable-of-thekitchentable"
                    className="text-primary hover:underline"
                  >
                    here
                  </Link>{" "}
                  to read the full story
                </p>
                {/* <div className="text-center">
                <Button asChild>
                  <Link href="https://voyagedenver.com/interview/community-highlights-meet-thekitchentable-of-thekitchentable">
                    Read the full story
                  </Link>
                </Button>
              </div> */}
              </CardContent>
            </Card>
            <Card className="w-full max-w-sm">
              <CardContent className="p-6 space-y-4">
                <Link
                  href="https://www.instagram.com/hotgirlfoodies/"
                  className="block"
                >
                  <Image
                    src="https://res.cloudinary.com/ddrjnijut/image/upload/v1728206232/Elegant_Circle_Signature_Photography_Logo_1_ydab80.jpg"
                    alt="VoyageDenver logo"
                    width={256}
                    height={256}
                    className="w-32 h-auto mx-auto rounded-lg object-contain"
                  />
                </Link>
                <p className="text-sm md:text-base text-muted-foreground text-center">
                  Click{" "}
                  <Link
                    href="https://www.instagram.com/hotgirlfoodies/"
                    className="text-primary hover:underline"
                  >
                    here
                  </Link>{" "}
                  to follow and support your local content creator!
                </p>
                {/* <div className="text-center">
                <Button asChild>
                  <Link href="https://voyagedenver.com/interview/community-highlights-meet-thekitchentable-of-thekitchentable">
                    Read the full story
                  </Link>
                </Button>
              </div> */}
              </CardContent>
            </Card>
            <Card className="w-full max-w-sm">
              <CardContent className="p-6 space-y-4">
                <Link
                  href="https://www.instagram.com/nashfood.blog/"
                  className="block"
                >
                  <Image
                    src="https://res.cloudinary.com/ddrjnijut/image/upload/v1728206182/image0_gdj2k0.jpg"
                    alt="VoyageDenver logo"
                    width={256}
                    height={256}
                    className="w-32 h-auto mx-auto rounded-lg object-contain"
                  />
                </Link>
                <p className="text-sm md:text-base text-muted-foreground text-center">
                  Click{" "}
                  <Link
                    href="https://www.instagram.com/nashfood.blog/"
                    className="text-primary hover:underline"
                  >
                    here
                  </Link>{" "}
                  to follow and support your local content creator!
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
