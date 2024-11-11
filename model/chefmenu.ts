import { Schema, model, Types, models } from "mongoose";

interface IChefMenu {
  chef: Types.ObjectId;
  name: string;
  description: string;
  price: number;
  ingredients: string[]; // Array of ingredients as strings
  category: string;
  menuImage: string; // Image of the dish
  dietaryPreferences: string[]; // Array of dietary preferences like "keto, halal, vegetarian"
  mealType: string; // Type of meal like "Appetizer, Entrée, Dessert"
}

const chefMenuSchema = new Schema<IChefMenu>(
  {
    chef: { type: Schema.Types.ObjectId, ref: "Chef", required: true },
    name: { type: String, required: true },
    menuImage: { type: String, default: null },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    ingredients: { type: [String] }, // Array of strings for ingredients
    category: { type: String }, // Single string for category
    dietaryPreferences: { type: [String], default: [] }, // Array of dietary preferences
    mealType: { type: String }, // Type of meal
  },
  { timestamps: true, versionKey: false }
);

const ChefMenu = models.ChefMenu || model("ChefMenu", chefMenuSchema);

export default ChefMenu;
