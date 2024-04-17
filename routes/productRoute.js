const express = require("express");

const router = express.Router();

// get all products
router.get("/products", (req, res) => {
  res.status(200);
  res.json([
    {
      productName: "Iphone 15",
      productPrice: "$1300",
    },
    {
      productName: "Iphone 14",
      productPrice: "$1200",
    },
    {
      productName: "Iphone 13",
      productPrice: "$1100",
    },
  ]);
});

//get a single product
router.get("/products/:id", (req, res) => {
  res.status(200);
  res.json({
    productName: "Iphone 15",
    productPrice: "$1300",
  });
});

//create a product
router.post('/products', (req, res) => {
    res.status(200)
    res.json({
        message: 'Product added successfully'
    })
})

//update a product
router.put('/products/:id', (req, res) => {
    res.status(200)
    res.json({
        message: 'Product updated successfully'
    })
})
//Delete a product
router.delete('/products/:id', (req, res) => {
    res.status(200)
    res.json({
        message: 'Product deleted successfully'
    })
})




module.exports = router;
