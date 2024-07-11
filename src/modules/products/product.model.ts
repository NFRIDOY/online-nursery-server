import { Schema, model } from "mongoose";
import { TInventory, TProduct,  } from "./product.interface";

// Define the Variant schema
const InventorySchema = new Schema<TInventory>({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<TProduct>({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    inventory: {
        type: InventorySchema,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    isDeleted: {
        type: Boolean,
    },
});

export const Product = model<TProduct>('Product', productSchema);
