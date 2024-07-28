import Image from "next/image";
import React from "react";

export default function Connectus() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center py-12 px-6 bg-[#9ACD32]     text-white">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Stay Connected</h2>
        <p className="mb-6">
          Subscribe to our newsletter to receive the latest updates, exclusive
          offers, and insights on seasonal harvests. Stay in the loop with
          FreshFarm.
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="youremail@example.com"
            className="p-2 rounded-l bg-white text-black w-full"
          />
          <button className="bg-black text-white py-2 px-4 rounded-r">
            Subscribe
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <Image
          height={1000}
          width={1000}
          src="/logo.webp"
          alt="Stay Connected"
          className=" w-full h-auto"
        />
      </div>
    </section>
  );
}
