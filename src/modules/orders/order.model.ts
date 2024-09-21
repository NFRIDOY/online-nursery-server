import mongoose, { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";
import { inventorySchema, Product, productSchema } from "../products/product.model";
import { categorySchema } from "../category/category.model";
import { min } from "date-fns";


export const productCartSchema = new Schema({
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
    quantity: {
        type: Number,
        required: true,
        min: 1,
    }
});

export const ProductCart = model("ProductCart", productCartSchema);

const OrderSchema = new Schema<TOrder>({
    customerId: {
        type: String,
    },
    customerName: {
        type: String,
        required: true,
    },
    customerPhone: {
        type: String,
        required: true,
    },
    customerEmail: {
        type: String,
    },
    customerAddress: {
        type: String,
        required: true,
    },
    deliveryFee: {
        type: Number,
        default: 100,
    },
    products: [productCartSchema],
    totalAmount: {
        type: Number,
        required: true,
    },
    grandTotal: {
        type: String || Number,
    },
});

export const Order = model<TOrder>("Order", OrderSchema);
