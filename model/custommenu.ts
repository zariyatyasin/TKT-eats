import { Schema, model, models, Document } from 'mongoose';

interface ICustomMenu extends Document {
  requestType: string;
  mealType: string[];
  bookingDate: Date;
  bookingTime: string;
  additionalNotes?: string;
  dietaryRestrictions?: string[];
  preparationPreferences?: string;
  foodStyle?: string;
  allergies?: string;
  preferredIngredients?: string;
  mealsPerWeek?: number;
  servingsPerMeal?: number;
  mealPrepFrequency?: string;
  cuisineType?: string;
  menuTheme?: string;
  budget?: number;
  guestCount?: number;
  chefId?: Schema.Types.ObjectId;
  chefName?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const customMenuSchema = new Schema<ICustomMenu>({
  requestType: {
    type: String,
  },
  mealType: {
    type: [String],
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  bookingTime: {
    type: String,
    required: true,
  },
  additionalNotes: {
    type: String,
  },
  dietaryRestrictions: {
    type: [String],
  },
  preparationPreferences: {
    type: String,
  },
  foodStyle: {
    type: String,
  },
  allergies: {
    type: String,
  },
  preferredIngredients: {
    type: String,
  },
  mealsPerWeek: {
    type: Number,
    min: 1,
  },
  servingsPerMeal: {
    type: Number,
    min: 1,
  },
  mealPrepFrequency: {
    type: String,
  },
  cuisineType: {
    type: String,
  },
  menuTheme: {
    type: String,
  },
  budget: {
    type: Number,
    min: 0,
  },
  guestCount: {
    type: Number,
    min: 1,
  },
  chefId: {
    type: Schema.Types.ObjectId,
    ref: "Chef",
  },
  chefName: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
}, { timestamps: true, versionKey: false });

const CustomMenu = models.CustomMenu || model<ICustomMenu>('CustomMenu', customMenuSchema);
export default CustomMenu;