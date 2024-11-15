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
  const result = await GetSingleChef(params.id);

  if (!result?.chef) {
    return {
      title: "Chef Not Found",
      description: "No chef data available.",
      keywords: "chef, not found",
    };
  }

  const chef = result.chef;
  const cleanDescription = stripHtmlTags(chef.description || "");

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
}

export default async function ChefPage({ params }: PageProps) {
  const result = await GetSingleChef(params.id);

  const chefData = result.chef;

  const reviews = result.allreviews;
  const menu = result.menus.map((menu: any) => ({
    id: menu._id,
    name: menu.name,
    description: menu.description,
    price: menu.price,
    ingredients: menu.ingredients,
    menuImage: menu.menuImage,
  }));

  return (
    <ChefBooking
      initialChefData={chefData}
      initialReviews={reviews}
      initialMenu={menu}
    />
  );
}
