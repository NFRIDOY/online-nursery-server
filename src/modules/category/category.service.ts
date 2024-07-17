import { TProduct } from "./category.interface";
import { Product } from "./category.model";

const createCategory = async (payload: TProduct) => {
    const result = await Product.create(payload);
    return result;
};
const getAllCategory = async () => {
    const result = await Product.find();
    return result;
};
const getCategoryById = async (id: string) => {
    const result = await Product.findById(id);
    return result;
};
const getSearchCategory = async (name: string) => {
    const regex = new RegExp(name, "i"); // 'i' makes it case insensitive
    const result = await Product.find({ name: { $regex: regex } });
    return result;
};
const updateCategoryById = async (id: string, payload: TProduct) => {
    const result = await Product.findByIdAndUpdate(id, payload, {
        new: true, // Return the updated document
        runValidators: true, // Validate the update operation
    });
    return result;
};

//5
const deleteCategoryById = async (id: string) => {
    const result = await Product.findByIdAndDelete(id);
    return result;
};

export const ProductServices = {
    createCategory,
    getAllCategory,
    getCategoryById,
    updateCategoryById,
    getSearchCategory,
    deleteCategoryById,
};
