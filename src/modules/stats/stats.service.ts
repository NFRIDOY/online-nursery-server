import { Product } from "../products/product.model";


const getTotalProducts = async () => {
    const result = await Product.find();
    console.log(result)
    return result?.length;
};


export const StatsServices = {
    getTotalProducts
};
