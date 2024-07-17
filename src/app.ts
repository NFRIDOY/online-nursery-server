import express, { NextFunction, Request, Response } from "express";
import { ProductRouters } from "./modules/products/product.route";
import { OrderRouters } from "./modules/orders/order.route";
import cors from "cors";
import { StatsRouters } from "./modules/stats/stats.route";
import { CategoryRouters } from "./modules/category/category.route";
const app = express();

// Define CORS options
const corsOptions: cors.CorsOptions = {
    origin: "http://localhost:5173", // Allow only this origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // Allow cookies to be sent
};

// Use CORS middleware with options
app.use(cors(corsOptions));

//parsers
app.use(express.json());

app.use("/api/products", ProductRouters);
app.use("/api/category", CategoryRouters);
app.use("/api/orders", OrderRouters);
app.use("/api/stats", StatsRouters);

app.get("/", (req: Request, res: Response) => {
    res.send("nursy Server is Running");
});

// "Not Found" middleware
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

// Error-handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Something went wrong!",
    });
});

export default app;
