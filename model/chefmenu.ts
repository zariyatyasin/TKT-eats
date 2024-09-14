import { Schema, model, Types, models } from "mongoose";

interface IChefMenu {
  chef: Types.ObjectId;
  name: string;
  description: string;
  price: number;
  ingredients: string[]; // Array of ingredients as strings
  category: string;
  menuImage:string // Category of the dish
}

const chefMenuSchema = new Schema<IChefMenu>(
  {
    chef: { type: Schema.Types.ObjectId, ref: "Chef", required: true },
    name: { type: String, required: true },
    menuImage: { type: String, default: null },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    
    ingredients: { type: [String],  }, // Array of strings for ingredients
    category: { type: String,  }, // Single string for category
  },
  { timestamps: true, versionKey: false }
);

const ChefMenu = models.ChefMenu || model("ChefMenu", chefMenuSchema);

export default ChefMenu;


