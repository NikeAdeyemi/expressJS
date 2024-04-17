const express = require("express");
const {getAllProducts, getSingleProduct, deleteProduct, createPost} = require('../controllers/productController')


const router = express.Router();

// get all products
router.get("/products", getAllProducts);

//get a single product
router.get("/products/:id", getSingleProduct)

//Delete a product
router.delete('/products/:id', deleteProduct )

//create a product
router.post("/products", createPost)


module.exports = router;
