import { Request, Response } from "express";
import { ProductServices } from "./category.service";

//1
const createCategory = async (req: Request, res: Response) => {
    try {
        const productData = req.body;
        const result = await ProductServices.createCategory(productData);

        // console.log(result)
        if (!result) {
            return res.json({
                success: false,
                message: "Product is not created!",
                data: result,
            });
        }
        // // data is sending as response from the database to the frontend.
        // // Here result is the inserted document
        res.json({
            success: true,
            message: "Product created successfully!",
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
            result = await ProductServices.getSearchCategory(search);
        } else {
            result = await ProductServices.getAllCategory();
        }

        // console.log(result)
        if (!result || result.length === 0) {
            return res.json({
                success: false,
                message: "No products found!",
                data: [],
            });
        }
        // // data is sending as response from the database to the frontend.
        // // Here result is the inserted document
        res.json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    } catch (error) {
        console.log("Error ==>", error);
    }
};
//3
const getCategoryById = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;

        const result = await ProductServices.getCategoryById(id);

        // console.log(result)
        // // data is sending as response from the database to the frontend.
        // // Here result is the inserted document
        if (!result) {
            return res.json({
                success: false,
                message: "Product not found",
                data: result,
            });
        }
        res.json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    } catch (error) {
        console.log("Error ==>", error);
    }
};
//4
const updateCategoryById = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;
        const updateProduct = req.body;
        const result = await ProductServices.updateCategoryById(
            id,
            updateProduct
        );

        // console.log(result)
        if (!result) {
            return res.json({ success: false, message: "Product not found" });
        }
        // // data is sending as response from the database to the frontend.
        // // Here result is the inserted document
        res.json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    } catch (error) {
        console.log("Error ==>", error);
    }
};

//5
const deleteCategoryById = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;

        const result = await ProductServices.deleteCategoryById(id);

        // console.log(result)
        if (!result) {
            return res.json({
                success: false,
                message: "Product not found",
                data: null,
            });
        }
        // // data is sending as response from the database to the frontend.
        // // Here result is the inserted document
        res.json({
            success: true,
            message: "Product deleted successfully!",
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
