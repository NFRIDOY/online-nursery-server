import express from "express";
import { StatsControllers } from "./stats.controller";

const router = express.Router();

router.get("/", StatsControllers.getTotalProducts);




export const StatsRouters = router;
