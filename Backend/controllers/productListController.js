// Require product detail array
const productDetails = require('../constants/productList.json');
const blogData = require('../constants/blog.json');

const obj = { ...productDetails };
const str = JSON.stringify(obj);
const obj2 = JSON.parse(str);
const data = [obj2[0], obj2[1], obj2[2]];

const allData1 = [...data[0].features_item, ...data[1].offer_item];
const allData2 = [...data[2].shoping_item[0].VEGETABLES, ...data[2].shoping_item[1].FRUITS, ...data[2].shoping_item[2].STATIONERY, ...data[2].shoping_item[3].FISH, ...data[2].shoping_item[4].POULTRY_AND_MEATS, ...data[2].shoping_item[5].ORGANIC_PRODUCTS];
const allData = [...allData1, ...allData2];

// send all product details
const sendProductData = (req, res, next) => {
  res.status(200).json({ status: 'success', message: productDetails });
};

// send all blog details
const sendBlogData = (req, res, next) => {
  res.status(200).json({ status: 'success', message: blogData });
};

// send filtered product
const filteredProduct = (req, res, next) => {
  // value from body
  const { productName } = req.body;
  if (!productName) {
    return res.status(400).json({ status: false, message: 'Missing parameters' });
  }
  // filter data correspondig to the product name.
  const productItem = productDetails.filter((element) => {
    if (element.name.toLowerCase() === productName.toLowerCase()) {
      return element;
    }
  });
  if (!productItem.length) {
    return res.status(404).json({ status: 'failure', message: 'Result Not Found' });
  }
  return res.status(200).json({ status: 'success', message: productItem });
};

const filteredProductById = (req, res, next) => {
  let id = req.params.product_id;

  id = id.substring(1);
  const filteredData = allData.filter((val) => val.web_id == id);
  const { type } = filteredData[0];
  const recommendFilter = allData.filter((val) => val.type == type && val.web_id !== id);
  if (filteredData.length) {
    return res.status(200).json({ status: 'true', message: { filteredData, recommendFilter } });
  }

  return res.status(404).json({ status: 'false', message: 'data not found' });
};

const filteredProductByPrice = (req, res, next) => {
  let { price } = req.params;

  price = price.substring(1);
  const filteredData = allData.filter((val) => val.price <= price);
  const responseArray = data;
  responseArray[0].features_item = filteredData;

  if (filteredData.length) {
    return res.status(200).json({ count: filteredData.length, message: responseArray });
  }

  return res.status(404).json({ status: 'false', message: 'data not found' });
};

const sendFilteredItems = (req, res, next) => {
  const input = req.body;

  const inputLength = Object.keys(input).length;

  if (inputLength == 1) {
    const key = Object.keys(input)[0];
    const value = input[key];
    const filteredData = allData.filter((val) => val[key] == value);
    const responseArray = data;
    responseArray[0].features_item = filteredData;

    return res.status(200).json({ count: filteredData.length, message: responseArray });
  } if (inputLength == 2) {
    const key1 = Object.keys(input)[0];
    const key2 = Object.keys(input)[1];
    const value1 = input[key1];
    const value2 = input[key2];
    const filteredData = allData.filter((val) => val[key1] == value1 || val[key2] == value2);
    const responseArray = data;
    responseArray[0].features_item = filteredData;

    return res.status(200).json({ count: filteredData.length, message: responseArray });
  }
  return res.status(404).json({ status: 'failure', message: 'requst not valid' });
};

const filteredProductByMainSearch = (req, res, next) => {
  let imageName = req.params.image_name;
  imageName = imageName.substring(1).toUpperCase();
  const filteredData = [];
  allData.forEach((e) => {
    if (e.image_name.toUpperCase().includes(imageName)) {
      filteredData.push(e);
    }
  });
  const responseArray = data;
  responseArray[0].features_item = filteredData;
  if (filteredData.length) {
    return res.status(200).json({ count: filteredData.length, message: responseArray });
  }

  return res.status(404).json({ status: 'false', message: 'data not found' });
};

module.exports = {
  sendProductData,
  filteredProduct,
  filteredProductById,
  sendBlogData,
  sendFilteredItems,
  filteredProductByPrice,
  filteredProductByMainSearch,
};
