import { Request, Response } from "express";
import { StatsServices } from "./stats.service";

//2
const getTotalProducts = async (req: Request, res: Response) => {
    try {
        const totalProducts = await StatsServices.getTotalProducts();
        const totalCategory = await StatsServices.getTotalCategory();
        const totalOrders = await StatsServices.getTotalOrders();
        // // data is sending as response from the database to the frontend.
        // // Here totalProducts is the inserted document
        res.json({
            success: true,
            message: "Stats fetched successfully!",
            data: { totalProducts, totalCategory, totalOrders },
        });
    } catch (error) {
        console.log("Error ==>", error);
    }
};

export const StatsControllers = {
    getTotalProducts,
};
