import { Schema, model, models, Document, Types } from 'mongoose';

// Define the TypeScript interface for a Promocode
export interface IPromocode extends Document {
    code: string;
    discountType: 'fixed' | 'percentage'; // Type of discount
    discountValue: number; // Value of the discount
    expirationDate: Date;
    isActive: boolean;
    minimumSpend?: number; // Minimum spend required to use the promocode
    chefs?: Types.ObjectId[]; // Array of references to chefs
}

// Create the Mongoose schema for the Promocode
const promocodeSchema = new Schema<IPromocode>({
    code: { type: String, required: true, unique: true },
    discountType: { type: String, enum: ['fixed', 'percentage'], required: true },
    discountValue: { type: Number, required: true },
    expirationDate: { type: Date },
    isActive: { type: Boolean, default: true },
    minimumSpend: { type: Number, required: false }, // Minimum spend field
    chefs: [{ type: Schema.Types.ObjectId, ref: 'Chef', required: false }] // Array of references
}, { timestamps: true, versionKey: false });

// Export the Mongoose model
const Promocode = models.Promocode || model<IPromocode>('Promocode', promocodeSchema);

export default Promocode;