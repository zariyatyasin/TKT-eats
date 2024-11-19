import { GetSingleChef } from "../_utils/action";
import ChefBooking from "../_utils/chef-booking";
import { Metadata } from "next";

type PageProps = { params: { id: string } };

function stripHtmlTags(str: string): string {
  return str.replace(/<\/?[^>]+(>|$)/g, "");
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  try {
    const result = await GetSingleChef(params.id);

    if (!result?.chef) {
      return {
        title: "Chef Not Found",
        description: "No chef data available.",
        keywords: "chef, not found",
      };
    }

    const chef = result.chef;
    const cleanDescription = stripHtmlTags(chef?.description || "");

    return {
      title: chef.name,
      description: cleanDescription,
      keywords: chef.cuisines.join(", "),
      openGraph: {
        title: chef.name,
        description: cleanDescription,
        images: [
          {
            url: chef.profileImage,
            alt: chef.name,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error fetching chef metadata:", error);
    return {
      title: "Error",
      description: "An error occurred while fetching chef data.",
      keywords: "error, chef",
    };
  }
}

export default async function ChefPage({ params }: PageProps) {
  try {
    const result = await GetSingleChef(params.id);

    if (!result?.chef) {
      return (
        <div className="text-center h-screen flex items-center justify-center text-xl text-red-500 mt-10">
          Chef not found!
        </div>
      );
    }
    if (!result) {
      return (
        <div className="text-center text-xl text-red-500 mt-10">
          Chef not found!
        </div>
      );
    }

    const chefData = result?.chef;
    const reviews = result?.allreviews || [];
    const menu = (result?.menus || []).map((menu: any) => ({
      id: menu._id,
      name: menu.name,
      description: menu.description,
      price: menu.price,
      ingredients: menu.ingredients,
      menuImage: menu.menuImage,
      dietaryPreferences: menu.dietaryPreferences,
      mealType: menu.mealType,
    }));

    return (
      <ChefBooking
        initialChefData={chefData}
        initialReviews={reviews}
        initialMenu={menu}
      />
    );
  } catch (error) {
    console.error("Error fetching chef data:", error);
    return (
      <div className="text-center text-xl text-red-500 mt-10">
        An error occurred while fetching chef data.
      </div>
    );
  }
}
