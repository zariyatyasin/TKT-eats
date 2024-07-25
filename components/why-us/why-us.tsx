import React from "react";

export default function Whyus() {
  return (
    <div>
      <section className="container max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-4">What is TKT? ?</h2>
        <p className="mb-6">
          Elevate Your Lifestyle with Fresh, Local, Organic, and Sustainable
          Produce.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <img
              src="/placeholder.svg"
              alt="Locally Grown Goodness"
              className="w-full h-auto mb-4"
            />
            <h3 className="text-xl font-bold">Locally Grown Goodness</h3>
            <p>
              Our vegetables thrive in our very own local gardens, guaranteeing
              an unparalleled level of freshness.
            </p>
          </div>
          <div>
            <img
              src="/placeholder.svg"
              alt="Organic Purity"
              className="w-full h-auto mb-4"
            />
            <h3 className="text-xl font-bold">Organic Purity</h3>
            <p>
              Committed to the principles of organic farming, our produce is
              cultivated without harmful pesticides.
            </p>
          </div>
          <div>
            <img
              src="/placeholder.svg"
              alt="Eco-Friendly Practices"
              className="w-full h-auto mb-4"
            />
            <h3 className="text-xl font-bold">Eco-Friendly Practices</h3>
            <p>
              We're a champion of sustainable farming, maintaining eco-friendly
              practices to contribute to a healthier planet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
