import mongoose, { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";
import { Product } from "../products/product.model";
import { max } from "date-fns";

const OrderSchema = new Schema<TOrder>({
    email: {
        type: String,
        required: true,
    },
    cart: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: Product, // Reference to the Product model
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                min: 1,
            },
        },
    ],
    customerId: {
        type: String,
        required: true,
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
        required: true,
    },
    customerAddress: {
        type: String,
        required: true,
    },
    deliveryFee: {
        type: Number,
        required: true,
    },
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: Product, // Reference to the Product model
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                min: 1,
            },
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
    grandTotal: {
        type: String,
        required: true,
    },
});

export const Order = model<TOrder>("Order", OrderSchema);
