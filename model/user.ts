import { Schema, model, models, Document } from "mongoose";

// Define the TypeScript interface for an Address
interface IAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

// Define the TypeScript interface for a User
interface IUser extends Document {
  name?: string;
  email: string;
  password?: string;
  profileImage?: string;
 
  createdAt: Date;
  updatedAt: Date;
}

// Create the Mongoose schema for the Address
 

// Create the Mongoose schema for the User
const userSchema = new Schema<IUser>(
  {
    name: { type: String   },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    profileImage: { type: String, default: null },
    
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Export the Mongoose model
const User = models.User || model<IUser>("User", userSchema);

export default User;