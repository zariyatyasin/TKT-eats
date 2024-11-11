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
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
    label: "TikTok",
  },
  {
    href: "https://open.spotify.com/show/13Zd75xqUIfHoOG8nbLbH6?si=7824295068994d92",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
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
    href: "https://www.instagram.com/coloradofoodenthusiast/",
    imgSrc:
      "https://res.cloudinary.com/ddrjnijut/image/upload/v1730889704/m3sfzgbstnec0pnyckhs.jpg",
    imgAlt: "colorado food enthusiast",
    description: (
      <>
        Click{" "}
        <Link
          href="https://www.instagram.com/coloradofoodenthusiast/"
          className="text-primary hover:underline"
        >
          here
        </Link>{" "}
        to follow and support your local content creator!
      </>
    ),
  },
  {
    href: "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fdenverfoodiecouple%2F%3Futm_source%3Dig_web_button_share_sheet%26igsh%3DZDNlZDc0MzIxNw%253D%253D&is_from_rle",
    imgSrc:
      "https://res.cloudinary.com/ddrjnijut/image/upload/v1731308573/xpcyoxxyfvmvnehbvjyv.jpg",
    imgAlt: "colorado food enthusiast",
    description: (
      <>
        Click{" "}
        <Link
          href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fdenverfoodiecouple%2F%3Futm_source%3Dig_web_button_share_sheet%26igsh%3DZDNlZDc0MzIxNw%253D%253D&is_from_rle"
          className="text-primary hover:underline"
        >
          here
        </Link>{" "}
        to follow and support your local content creator!
      </>
    ),
  },
  {
    href: "https://www.rockymountainchefs.com/",
    imgSrc:
      "https://res.cloudinary.com/ddrjnijut/image/upload/v1731308667/yp4anrbdjzdfq89e0noz.jpg",
    imgAlt: "colorado food enthusiast",
    description: (
      <>
        To learn more about becoming a chef with RMCC Click{" "}
        <Link
          href="https://www.rockymountainchefs.com/"
          className="text-primary hover:underline"
        >
          here
        </Link>
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
              {typeof link.icon === "function" ? (
                //@ts-ignore
                link.icon()
              ) : (
                //@ts-ignore

                <link.icon className="w-4 h-4" />
              )}
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
      <div className="  space-y-12">
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
            className="w-full  lg:max-w-7xl"
            plugins={[
              Autoplay({
                delay: 2000,
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
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
