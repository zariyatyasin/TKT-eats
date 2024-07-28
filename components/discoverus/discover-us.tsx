import Image from "next/image";
import React from "react";

export default function Discoverus() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center py-12 px-6">
      <div className="md:w-1/2">
        <Image
          height={1000}
          width={1000}
          src="/placeholder.svg"
          alt="FreshFarm Catalog"
          className="w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 bg-[#9ACD32]     text-white p-8">
        <h2 className="text-4xl font-bold mb-4">
          Discover the FreshFarm Catalog
        </h2>
        <p className="mb-6">
          Explore a world of vibrant vegetables, just a click away. Discover
          your favorites and elevate your dining experience.
        </p>
        <button className="bg-black text-white py-2 px-4 rounded">
          Shop Now
        </button>
      </div>
    </section>
  );
}
