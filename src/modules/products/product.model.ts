import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

// Define the Variant schema

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
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
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

export const Product = model<TProduct>("Product", productSchema);
