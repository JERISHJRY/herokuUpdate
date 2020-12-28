const express = require('express');

const router = express.Router();

// Require controller modules.
const product = require('../controllers/productListController');
router.get('/blog',product.sendBlogData);
//get all products.
router.get('/items',product.sendProductData);

//get blog data.
router.get('/blog',product.sendBlogData);

//filterby body data
router.post("/filterProduct",product.sendFilteredItems);

//filter product.
router.post('/items',product.filteredProduct);

//filter product by params id
router.get('/:product_id',product.filteredProductById);

//filter product by params price
router.get('/priceFilter/:price',product.filteredProductByPrice);

//filter product by params product name
router.get('/search/:image_name',product.filteredProductByMainSearch);

module.exports = router;
