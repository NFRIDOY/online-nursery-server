import { Category } from "../category/category.model";
import { Order } from "../orders/order.model";
import { Product } from "../products/product.model";

const getTotalProducts = async () => {
    const result = await Product.find();
    return result?.length;
};
const getTotalCategory = async () => {
    const result = await Category.find();
    return result?.length;
};
const getTotalOrders = async () => {
    const result = await Order.find();
    return result?.length;
};

export const StatsServices = {
    getTotalProducts,
    getTotalCategory,
    getTotalOrders,
};
