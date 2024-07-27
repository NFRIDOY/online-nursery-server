import { TCategory } from "./category.interface";
import { Category} from "./category.model";

const createCategory = async (payload: TCategory) => {
    const result = await Category.create(payload);
    return result;
};
const getAllCategory = async () => {
    const result = await Category.find();
    return result;
};
const getCategoryById = async (id: string) => {
    const result = await Category.findById(id);
    return result;
};
const getSearchCategory = async (name: string) => {
    const regex = new RegExp(name, "i"); // 'i' makes it case insensitive
    const result = await Category.find({ name: { $regex: regex } });
    return result;
};
const updateCategoryById = async (id: string, payload: TCategory) => {
    const result = await Category.findByIdAndUpdate(id, payload, {
        new: true, // Return the updated document
        runValidators: true, // Validate the update operation
    });
    return result;
};

//5
const deleteCategoryById = async (id: string) => {
    const result = await Category.findByIdAndDelete(id);
    return result;
};

export const CategoryServices = {
    createCategory,
    getAllCategory,
    getCategoryById,
    updateCategoryById,
    getSearchCategory,
    deleteCategoryById,
};
