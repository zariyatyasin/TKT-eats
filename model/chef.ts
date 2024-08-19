import { Schema, model, Types, models } from "mongoose";

const imageSchema = new Schema(
  {
    url: { type: String, required: true },   // URL or path to the image
    caption: { type: String, default: null }, // Optional caption for the image
    altText: { type: String, default: null }, // Optional alt text for accessibility
  },
  { _id: false } // Disable _id for sub-documents if not needed
);

const chefSchema = new Schema(
  {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    profileImage: { type: String, default: null },
    experience: { type: String, required: true },
    cuisines: { type: [String], required: true },
    location: { type: String, required: true },
    description:{ type: String, required: true },
    contact: {
      phone: { type: String, required: true },
      email: { type: String, required: true },
    },
    images: { type: [imageSchema], default: [] },  // Updated field for multiple image objects
  },
  {
    timestamps: true,
  }
);

// Make sure to use `models` to avoid overwriting the model during hot reloads in development
const Chef = models.Chef || model("Chef", chefSchema);

export default Chef;
