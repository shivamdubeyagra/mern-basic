import express from "express";
import Product from "../models/products.model.js";
const router = express.Router();
import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/products.controller.js";

router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);

export default router;
