import express from "express";
import { CategoryControllers } from "./category.controller";

const router = express.Router();

router.post("/", CategoryControllers.createCategory);
router.get("/", CategoryControllers.getAllCategory);
router.get("/:CategoryId", CategoryControllers.getCategoryById);
router.put("/:CategoryId", CategoryControllers.updateCategoryById);
router.delete("/:CategoryId", CategoryControllers.deleteCategoryById);

export const CategoryRouters = router;
