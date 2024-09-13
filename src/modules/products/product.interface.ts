import { TCategory } from "../category/category.interface";

export type category = {
    name: string;
};

export type TInventory = {
    quantity: number;
    inStock: boolean;
};

export type TProduct = {
    _id?: string;
    image: string;
    title: string;
    description: string;
    price: number;
    category?: TCategory | category;
    inventory: TInventory;
    rating: string;
    isDeleted: boolean;
};
