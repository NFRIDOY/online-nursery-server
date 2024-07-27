import { Request, Response } from "express";
import { CategoryServices } from "./category.service";

//1
const createCategory = async (req: Request, res: Response) => {
    try {
        const CategoryData = req.body;
        const result = await CategoryServices.createCategory(CategoryData);

        // console.log(result)
        if (!result) {
            return res.json({
                success: false,
                message: "Category is not created!",
                data: result,
            });
        }
        // // data is sending as response from the database to the frontend.
        // // Here result is the inserted document
        res.json({
            success: true,
            message: "Category created successfully!",
            data: result,
        });
    } catch (error) {
        console.log("Error ==>", error);
    }
};
//2
const getAllCategory = async (req: Request, res: Response) => {
    try {
        const search = req.query.searchTerm as string;
        // console.log(search);

        let result;
        if (search) {
            result = await CategoryServices.getSearchCategory(search);
        } else {
            result = await CategoryServices.getAllCategory();
        }

        // console.log(result)
        if (!result || result.length === 0) {
            return res.json({
                success: false,
                message: "No Categorys found!",
                data: [],
            });
        }
        // // data is sending as response from the database to the frontend.
        // // Here result is the inserted document
        res.json({
            success: true,
            message: "Categorys fetched successfully!",
            data: result,
        });
    } catch (error) {
        console.log("Error ==>", error);
    }
};
//3
const getCategoryById = async (req: Request, res: Response) => {
    try {
        const id = req.params.CategoryId;

        const result = await CategoryServices.getCategoryById(id);

        // console.log(result)
        // // data is sending as response from the database to the frontend.
        // // Here result is the inserted document
        if (!result) {
            return res.json({
                success: false,
                message: "Category not found",
                data: result,
            });
        }
        res.json({
            success: true,
            message: "Categorys fetched successfully!",
            data: result,
        });
    } catch (error) {
        console.log("Error ==>", error);
    }
};
//4
const updateCategoryById = async (req: Request, res: Response) => {
    try {
        const id = req.params.CategoryId;
        const updateCategory = req.body;
        const result = await CategoryServices.updateCategoryById(
            id,
            updateCategory
        );

        // console.log(result)
        if (!result) {
            return res.json({ success: false, message: "Category not found" });
        }
        // // data is sending as response from the database to the frontend.
        // // Here result is the inserted document
        res.json({
            success: true,
            message: "Category updated successfully!",
            data: result,
        });
    } catch (error) {
        console.log("Error ==>", error);
    }
};

//5
const deleteCategoryById = async (req: Request, res: Response) => {
    try {
        const id = req.params.CategoryId;

        const result = await CategoryServices.deleteCategoryById(id);

        // console.log(result)
        if (!result) {
            return res.json({
                success: false,
                message: "Category not found",
                data: null,
            });
        }
        // // data is sending as response from the database to the frontend.
        // // Here result is the inserted document
        res.json({
            success: true,
            message: "Category deleted successfully!",
            data: null,
        });
    } catch (error) {
        console.log("Error ==>", error);
    }
};

export const CategoryControllers = {
    createCategory,
    getAllCategory,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById,
};
