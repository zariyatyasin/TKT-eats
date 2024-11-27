import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-12">
      <main className="container mx-auto px-4 py-16 space-y-16">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            About TheKitchenTable
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TheKitchenTable is where food and connection meet innovation. By
            making private chef services accessible and affordable, this
            platform empowers chefs to take control of their careers while
            giving diners unforgettable, personalized experiences in their own
            homes.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">
            A Mission Rooted in Passion
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            TheKitchenTable was born from co-founder Marvin's lifelong
            connection to food and a deep understanding of the challenges chefs
            face. Marvin&apos;s grand uncle in Austria poured his heart into his
            small restaurant, yet he struggled to bring in customers. The joy on
            his face when Marvin came to eat was bittersweet—proof of his
            passion but also of how difficult his dream had been.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            A relative in New York City worked as a chef for decades, only to
            leave the industry due to low pay and exhausting hours. Now in his
            70s, he still cooks daily, holding on to the love that kept him
            going.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            These stories shaped Marvin&apos;s vision: a world where chefs
            thrive doing what they love. With the support of co-founder Yasin, a
            tech visionary, TheKitchenTable bridges the gap between chefs and
            diners, building a community fueled by food, innovation, and
            purpose.
          </p>
        </section>

        <section className=" max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">
            The Faces Behind the Table
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="https://res.cloudinary.com/ddrjnijut/image/upload/v1732525753/psjkjipclyrxbyqjtcim.jpg"
                  alt="Marvin Lim"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Marvin Lim
                  </h3>
                  <p className="text-lg text-gray-600">Co-Founder & CEO</p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="https://res.cloudinary.com/ddrjnijut/image/upload/v1732525607/r56nvkqnroqnaeoynu5p.jpg"
                  alt="Zariyat Yasin"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Zariyat Yasin
                  </h3>
                  <p className="text-lg text-gray-600">Co-Founder & CTO</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center space-y-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Join the Movement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TheKitchenTable isn&apos;t just about meals—it&apos;s about
            connection, empowerment, and making every dining experience
            extraordinary.
          </p>

          <div className="flex justify-center gap-4">
            <Link href={"/findchef"}>
              <Button size="lg">Book a Chef</Button>
            </Link>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc3SBIBXTxIUWoQbtm74b_7CV2GgeUw2E7OumpieY0gsaxtBA/viewform?pli=1">
              <Button size="lg" variant="outline">
                Become a Chef
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
