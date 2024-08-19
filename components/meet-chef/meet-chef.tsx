import { GetAllChef } from "@/app/findchef/_utils/action";
import ChefCard from "@/app/findchef/_utils/chef-card";

export default async function MeetChef() {
  const result = await GetAllChef();

  if (result?.data?.length < 0) {
    return (
      <div className="text-center text-xl text-red-500 mt-10">
        No Data Found!
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-dvh">
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {result.data &&
              result.data.map((chef: any) => (
                <ChefCard
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
