import mongoose, { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";
import { Product, productSchema } from "../products/product.model";
import { max } from "date-fns";

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
    products: [productSchema],
    totalAmount: {
        type: Number,
        required: true,
    },
    grandTotal: {
        type: String,
    },
});

export const Order = model<TOrder>("Order", OrderSchema);
