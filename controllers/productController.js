exports.getAllProducts = (req, res) => {
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
  }

  exports.getSingleProduct = (req, res) => {
    res.status(200);
    res.json({
        productName: "Iphone 15",
        productPrice: "$1300",
      })
    }

    exports.deleteProduct = (req, res) => {
        res.status(200)
        res.json({
            message: 'Product deleted successfully'
        })
    }

    exports.createPost = (req, res) => {
        res.status(200)
        res.json({
            message: 'Post created successfully'
        })
    }