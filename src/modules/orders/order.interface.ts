import { TProduct } from "../products/product.interface";

export type TOrder = {
    email: string;
    // productId: string;
    cart: TProduct[];
    price: number;
    quantity: number;
};
