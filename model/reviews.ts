import { Schema, model, Types, models } from "mongoose";

// Define the interface for the review
interface IReview {
//   user: Types.ObjectId; // Reference to the user who left the review
  user: string; // Reference to the user who left the review
  chef: Types.ObjectId; // Reference to the chef being reviewed
  rating: number; // Rating given to the chef (1 to 5)
  comment: string; // Review text/comment
}

// Define the schema for the review
const reviewSchema = new Schema<IReview>(
  {
    // user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    user: { type: String,   required: true },
    chef: { type: Schema.Types.ObjectId, ref: "Chef", required: true },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

// Export the Review model
const Review = models.Review || model("Review", reviewSchema);

export default Review;

 