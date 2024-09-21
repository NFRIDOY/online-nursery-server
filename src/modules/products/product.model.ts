import { Schema, model } from "mongoose";
import { TInventory, TProduct } from "./product.interface";
import { categorySchema } from "../category/category.model";

// Define the Variant schema

export const inventorySchema = new Schema<TInventory>({
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
});

export const productSchema = new Schema<TProduct>({
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
        type: categorySchema,
        required: true,
    },
    inventory: {
        type: inventorySchema,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
    },
});

export const Product = model<TProduct>("Product", productSchema);
