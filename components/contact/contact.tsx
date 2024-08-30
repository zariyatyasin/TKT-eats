import {
  Facebook,
  InstagramIcon,
  Linkedin,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div>
      <section
        id="contact"
        className="bg-background text-foreground py-12 md:py-16 lg:py-20"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 md:text-4xl">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mb-8 md:text-lg">
              Have a question or need assistance? Don&lsquo;t hesitate to reach
              out.
            </p>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center  space-x-4  justify-center">
                <Link
                  href={" https://www.facebook.com/share/1oty7mFZcgvYkeQE/"}
                >
                  <Facebook className=" w-6 h-6 text-blue-600" />
                </Link>
                <Link
                  href={
                    "https://www.instagram.com/thekitchentable_official/?hl=en"
                  }
                >
                  <InstagramIcon className=" w-6 h-6  text-orange-500" />
                </Link>
                <Link
                  href={
                    "https://www.linkedin.com/company/thekitchentable/?viewAsMember=true"
                  }
                >
                  <Linkedin className=" w-6 h-6  text-green-500" />
                </Link>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <PhoneIcon className="w-5 h-5 text-primary" />
                <Link
                  href="tel:+15099928838"
                  className="text-primary hover:underline hover:underline-offset-2"
                >
                  +1 720-307-2571
                </Link>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MailIcon className="w-5 h-5 text-primary" />
                <Link
                  href="mailto:thekitchentableofficial@gmail.com"
                  className="text-primary hover:underline hover:underline-offset-2"
                >
                  thekitchentableofficial@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
