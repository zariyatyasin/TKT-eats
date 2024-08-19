import { model,models, Schema,Types } from 'mongoose';
// Interface for Item
interface IItem {
  id: Types.ObjectId;
  name: string;
  description: string;
  price: number;
  ingredients: string[];
  menuImage: string;
  quantity: number;
}

// Interface for Order
interface IOrder extends Document {
  name: string;
  notes: string;
  address: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  items: IItem[];
  totalCost: number;
  chefName: string;
  chefId: Types.ObjectId;
}

// Item Schema
const itemSchema = new Schema<IItem>({
  id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  menuImage: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
}, {
  _id: false
});

// Order Schema
const orderSchema = new Schema<IOrder>({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  notes: {
    type: String,
 
  },
  time: {
    type: String,
    required: true
  },
  items: {
    type: [itemSchema],
    required: true
  },
  totalCost: {
    type: Number,
    required: true
  },
  chefName: {
    type: String,
    required: true
  },
  chefId: {
    type: Schema.Types.ObjectId,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});

const Order = models.Order || model("Order", orderSchema);
export default Order;
