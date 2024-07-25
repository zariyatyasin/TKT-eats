import React from "react";

export default function Faq() {
  return (
    <section className="container mx-auto py-12 px-6">
      <h2 className="text-2xl font-bold mb-4">
        Frequently Asked Questions (FAQ)
      </h2>
      <p className="mb-6">
        Explore Common Queries About FreshFarm's Fresh and Organic Vegetables
      </p>
      <div className="space-y-4">
        <div className="border p-4 rounded">
          <h3 className="text-lg font-bold">
            What sets FreshFarm vegetables apart?
          </h3>
          <p>
            FreshFarm vegetables stand out because they are locally grown in our
            own gardens, follow organic farming practices, and are harvested at
            the peak of freshness for the most vibrant flavor.
          </p>
        </div>
        <div className="border p-4 rounded">
          <h3 className="text-lg font-bold">
            How do you maintain the freshness of your vegetables?
          </h3>
          <p>
            We maintain the freshness of our vegetables by harvesting them at
            the peak of ripeness and delivering them directly to your doorstep
            within hours of picking.
          </p>
        </div>
        <div className="border p-4 rounded">
          <h3 className="text-lg font-bold">
            How can I place an order for FreshFarm vegetables?
          </h3>
          <p>
            Placing an order is easy! Simply navigate our website, choose your
            selection, customize your order, and confirm your purchase.
          </p>
        </div>
        <div className="border p-4 rounded">
          <h3 className="text-lg font-bold">
            Do you offer international shipping?
          </h3>
          <p>
            Yes, we offer international shipping to 28 countries. Please check
            our shipping policy for more details.
          </p>
        </div>
      </div>
      <div className="text-center mt-6">
        <button className="bg-black text-white py-2 px-4 rounded">
          Contact Customer Service
        </button>
      </div>
    </section>
  );
}
