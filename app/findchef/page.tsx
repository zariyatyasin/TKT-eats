import { GetAllChef } from "./_utils/action";
import ChefCard from "./_utils/chef-card";

export default async function Page() {
  const result = await GetAllChef({ limit: "30" });

  if (result?.data?.length < 0) {
    return (
      <div className="text-center text-xl text-red-500 mt-10">
        No Data Found!
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-dvh  4">
      <section className="bg-[#f5f5f5] pb-8 pt-28  ">
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
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
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
              ))}{" "}
          </div>
        </div>
      </section>
    </div>
  );
}
