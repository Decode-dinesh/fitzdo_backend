const express = require("express");
const { getAllProducts, getProductById, createProduct } = require("../logics/ProductLogic");
const { authMiddleware } = require("../middleware/middleware");



const router = express.Router();

router.post('/post',authMiddleware, createProduct);
router.get('/',authMiddleware, getAllProducts);
router.get('/:id',authMiddleware, getProductById);




module.exports = router;