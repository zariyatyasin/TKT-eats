"use client";

import { useEffect, useState } from "react";
import { GetAllChef } from "./_utils/action";
import ChefCard from "./_utils/chef-card";
import Filter from "./_utils/filter-content";
import Pagination from "./_utils/pagination";

function ChefCardSkeleton() {
  return (
    <div className="bg-background rounded-xl overflow-hidden shadow-lg animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-4 space-y-4">
        <div className="h-6 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="flex justify-between">
          <div className="h-8 w-20 bg-gray-300 rounded"></div>
          <div className="h-4 w-16 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default function Page({
  searchParams,
}: {
  searchParams: {
    categories?: string;
    page?: string;
    search?: string;
    location?: string;
  };
}) {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await GetAllChef({
        limit: "16",
        page: searchParams.page || "1",
        search: searchParams.search || "",
        location: searchParams.location || "",
        cuisines: searchParams.categories || "",
      });
      setResult(data);
      setLoading(false);
    }
    fetchData();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-dvh">
        <section className="bg-[#f5f5f5] pb-8 pt-28">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Top chefs in your area
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Browse our curated selection of top-rated chefs and book your
                next culinary experience.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <Filter />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <ChefCardSkeleton key={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (result?.data?.length === 0) {
    return (
      <div className="text-center text-xl text-red-500 mt-10">
        No Data Found!
      </div>
    );
  }

  const totalPages = result?.totalPages;
  const currentPage = result?.currentPage;

  return (
    <div className="flex flex-col min-h-dvh">
      <section className="bg-[#f5f5f5] pb-8 pt-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Top chefs in your area
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Browse our curated selection of top-rated chefs and book your next
              culinary experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <Filter />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {result.data &&
              result.data.map((chef: any) => (
                <ChefCard
                  location={chef.location}
                  reviewCount={chef.reviewCount}
                  profileImage={chef.profileImage}
                  key={chef._id}
                  name={chef.name}
                  id={chef._id}
                  cuisines={chef.cuisines}
                />
              ))}
          </div>
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        </div>
      </section>
    </div>
  );
}
