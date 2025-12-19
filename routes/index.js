const express =  require("express");

const AuthRouter = require("./auth.route.js");
const ProductRouter = require("./Product.route.js");

const router = express.Router();


router.use("/auth",AuthRouter);
router.use("/products",ProductRouter);

module.exports = router;