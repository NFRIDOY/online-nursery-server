import { Schema, model } from "mongoose";
import { TCategory } from "./category.interface";

// Define the schema

export const categorySchema = new Schema<TCategory>({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
    },
});

export const Category = model<TCategory>("Category", categorySchema);
