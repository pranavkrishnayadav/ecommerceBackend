import express from "express";

import { deleteProduct, getallproducts ,addproduct,updateProduct} from "../controllers/productcontroller.js";
const router = express.Router();
router.get("/products", getallproducts);

router.post("/products", addproduct);

router.put("/products/:id",updateProduct)

router.delete("/products/:id",deleteProduct)

export default router;
