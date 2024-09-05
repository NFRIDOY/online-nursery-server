import mongoose, { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";
import { Product } from "../products/product.model";

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
    // productId: {
    //     type: String,
    //     required: true,
    // },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    
});

export const Order = model<TOrder>("Order", OrderSchema);
