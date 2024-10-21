import { MetadataRoute } from "next";
import { GetAllChef } from "./findchef/_utils/action"; // Import the function that fetches all chefs

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.tkteats.com";

  // Static routes
  const staticRoutes = [
    { url: `${baseUrl}/findchef`, lastModified: new Date() },
    { url: `${baseUrl}/terms`, lastModified: new Date() },
  ];

  // Fetch all chef IDs
  let chefRoutes: MetadataRoute.Sitemap = [];
  try {
    const chefs = await GetAllChef(); // Fetch all chefs data
    console.log("this is chef", chefs);

    // Check if chefs.data is defined and is an array
    if (chefs && Array.isArray(chefs.data)) {
      // Map through the chef data to generate dynamic routes for each chef
      chefRoutes = chefs.data.map((chef: { _id: string }) => ({
        url: `${baseUrl}/findchef/${chef._id}`,
        lastModified: new Date(),
      }));
    } else {
      console.error("Unexpected response structure:", chefs);
    }
  } catch (error) {
    console.error("Failed to fetch chef IDs:", error);
  }

  return [...staticRoutes, ...chefRoutes];
}