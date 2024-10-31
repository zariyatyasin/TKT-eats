"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Youtube, Instagram } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.youtube.com/@3cmpodcast",
    icon: Youtube,
    label: "YouTube",
  },
  {
    href: "https://www.instagram.com/3cm.podcast/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@3cm.podcast",
    icon: Instagram,
    label: "TikTok",
  },
  {
    href: "https://open.spotify.com/show/13Zd75xqUIfHoOG8nbLbH6?si=7824295068994d92",
    icon: Instagram,
    label: "Spotify",
  },
];

const partners = [
  {
    href: "https://entrepreneurship.wsu.edu",
    imgSrc: "/wsu.png",
    imgAlt: "Washington State University logo",
    description: (
      <>
        Click{" "}
        <Link
          href="https://catalog.wsu.edu/General/Academics/DegreeProgram/10062"
          className="text-primary hover:underline"
        >
          here
        </Link>{" "}
        to learn what it&apos;s like to be an entrepreneur
      </>
    ),
  },
  {
    href: "https://voyagedenver.com/interview/community-highlights-meet-thekitchentable-of-thekitchentable",
    imgSrc:
      "https://res.cloudinary.com/ddrjnijut/image/upload/v1727365176/ngep287auj04ayeykfsf.png",
    imgAlt: "VoyageDenver logo",
    description: (
      <>
        Discover more about our journey and mission in this insightful article
        written by VoyageDenver. Click{" "}
        <Link
          href="https://voyagedenver.com/interview/community-highlights-meet-thekitchentable-of-thekitchentable"
          className="text-primary hover:underline"
        >
          here
        </Link>{" "}
        to read the full story
      </>
    ),
  },
  {
    href: "https://www.instagram.com/hotgirlfoodies/",
    imgSrc:
      "https://res.cloudinary.com/ddrjnijut/image/upload/v1728206232/Elegant_Circle_Signature_Photography_Logo_1_ydab80.jpg",
    imgAlt: "Hot Girl Foodies logo",
    description: (
      <>
        Click{" "}
        <Link
          href="https://www.instagram.com/hotgirlfoodies/"
          className="text-primary hover:underline"
        >
          here
        </Link>{" "}
        to follow and support your local content creator!
      </>
    ),
  },
  {
    href: "https://www.instagram.com/nashfood.blog/",
    imgSrc:
      "https://res.cloudinary.com/ddrjnijut/image/upload/v1728206182/image0_gdj2k0.jpg",
    imgAlt: "Nash Food Blog logo",
    description: (
      <>
        Click{" "}
        <Link
          href="https://www.instagram.com/nashfood.blog/"
          className="text-primary hover:underline"
        >
          here
        </Link>{" "}
        to follow and support your local content creator!
      </>
    ),
  },
  {
    href: "https://www.youtube.com/@3cmpodcast",
    imgSrc:
      "https://res.cloudinary.com/ddrjnijut/image/upload/v1730372535/Screenshot_2024-10-31_at_4.54.39_PM_li0xsf.png",
    imgAlt: "3cm Podcast logo",
    description: (
      <>
        Check out the 3cm Podcast for insightful discussions and entertaining
        content!
        <div className="flex justify-center space-x-2 mt-2">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-4 h-4" />
            </Link>
          ))}
        </div>
      </>
    ),
  },
];

export default function Component() {
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (api) {
      api.on("select", () => {
        if (api.selectedScrollSnap() === api.scrollSnapList().length - 1) {
          setTimeout(() => {
            api.scrollTo(0);
          }, 3000);
        }
      });
    }
  }, [api]);

  return (
    <section id="partners" className="py-24 px-6">
      <div className=" mx-auto space-y-12">
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
          className="flex justify-center"
        >
          <Carousel
            setApi={setApi}
            className="w-full   lg:max-w-7xl"
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="w-full">
                    <CardContent className="p-6 space-y-4">
                      <Link href={partner.href} className="block">
                        <Image
                          src={partner.imgSrc}
                          alt={partner.imgAlt}
                          width={256}
                          height={256}
                          className="w-32 h-32 mx-auto rounded-lg object-contain"
                        />
                      </Link>
                      <div className="text-sm md:text-base text-muted-foreground text-center">
                        {partner.description}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
