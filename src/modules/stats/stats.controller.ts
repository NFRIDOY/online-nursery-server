import { Request, Response } from "express";
import { StatsServices } from "./stats.service";

//2
const getTotalProducts = async (req: Request, res: Response) => {
    try {
        const result = await StatsServices.getTotalProducts();
        // // data is sending as response from the database to the frontend.
        // // Here result is the inserted document
        res.json({
            success: true,
            message: "Stats fetched successfully!",
            data: result,
        });
    } catch (error) {
        console.log("Error ==>", error);
    }
};

export const StatsControllers = {
    getTotalProducts
};
