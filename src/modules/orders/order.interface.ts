import { TProduct } from "../products/product.interface";

export type TOrder = {
    _id?: string;
    customerId?: string;
    customerName: string;
    customerPhone: string;
    customerEmail: string;
    customerAddress: string;
    deliveryFee?: number;
    products: TProduct[];
    totalAmount: number;
    grandTotal?: number;
};
