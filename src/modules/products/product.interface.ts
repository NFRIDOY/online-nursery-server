import { TCategory } from "../category/category.interface";

// export type category = {
//     name: string;
// };

export type TInventory = {
    quantity: number;
    inStock: boolean;
};

export type TProduct = {
    image: string;
    title: string;
    description: string;
    price: number;
    category: TCategory;
    inventory: TInventory;
    rating: number;
    isDeleted: boolean;
};
