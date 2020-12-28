//Require product detail array
const productDetails = require('../constants/productList.json');
const blogData = require('../constants/blog.json');
let obj ={...productDetails}
let str = JSON.stringify(obj);
let obj2 = JSON.parse(str);
const data =[obj2[0],obj2[1],obj2[2]]

const allData1 = [...data[0].features_item,...data[1].reccomended_item]
const allData2 = [...data[2].shoping_item[0].T_SHIRT,...data[2].shoping_item[1].BLAZERS,...data[2].shoping_item[2].SUNGLASS,...data[2].shoping_item[3].KIDS,...data[2].shoping_item[4].POLO_SHIRTS]
const allData =[...allData1,...allData2];

//send all product details
const sendProductData = (req, res, next) => {
     res.status(200).json({ status: 'success', message: productDetails });
 };

 //send all blog details
const sendBlogData = (req, res, next) => {
  res.status(200).json({ status: 'success', message: blogData });
};

 //send filtered product
 const filteredProduct = (req, res, next) => {
   //value from body
   const {productName} = req.body;
   if (!productName) {
        return res.status(400).json({ status: false, message: 'Missing parameters' });
      }
   //filter data correspondig to the product name.
   const productItem = productDetails.filter  ((element)=>{
         if(element.name.toLowerCase() === productName.toLowerCase()) {
           return element
         }  
        });
   if(!productItem.length ){
      return res.status(404).json({ status: 'failure', message: 'Result Not Found' });
   } else {
      return res.status(200).json({ status: 'success', message: productItem });
   } 
  };




const filteredProductById = (req, res, next) => {
     let id = req.params.product_id;
     
     id= id.substring(1);
     let filteredData = allData.filter(val => val.web_id == id )
     const type = filteredData[0].type;
     const recommendFilter= allData.filter(val =>val.type == type && val.web_id !== id) 
     if(filteredData.length){
      return res.status(200).json({ status: 'true', message: {filteredData:filteredData,recommendFilter:recommendFilter} });
     }
     else{
      return res.status(404).json({ status: 'false', message: "data not found" });
     }
};

const filteredProductByPrice = (req, res, next) => {
  let price = req.params.price;

  price= price.substring(1);
  let filteredData = allData.filter(val => val.price <= price )
  let responseArray = data;
  responseArray[0].features_item = filteredData;
  
  if(filteredData.length){
   return res.status(200).json({ count: filteredData.length, message: responseArray });
  }
  else{
   return res.status(404).json({ status: 'false', message: "data not found" });
  }
};

const sendFilteredItems =(req,res,next)=>{
  const input = req.body;
  
  let inputLength =Object.keys(input).length

  if(inputLength == 1){
    let key = Object.keys(input)[0];
    let value = input[key];
    const filteredData = allData.filter(val => val[key] ==value);
    let responseArray = data;
    responseArray[0].features_item = filteredData;

    return res.status(200).json({ count: filteredData.length, message: responseArray });
  }
  else if(inputLength == 2){
    let key1 = Object.keys(input)[0];
    let key2 = Object.keys(input)[1];
    let value1 = input[key1];
    let value2 = input[key2];
    const filteredData = allData.filter(val => val[key1] ==value1 || val[key2] ==value2 );
    let responseArray = data;
    responseArray[0].features_item = filteredData;

    return res.status(200).json({ count: filteredData.length, message:responseArray});
  }
  else{
    return res.status(404).json({ status: 'failure', message: 'requst not valid' });
  }
}

const filteredProductByMainSearch = (req, res, next) => {
  let imageName = req.params.image_name;
  imageName= imageName.substring(1).toUpperCase();
  let filteredData = [];
  allData.forEach((e)=>{
    if(e.image_name.includes(imageName)){
      filteredData.push(e);
    }
})
  let responseArray = data;
  responseArray[0].features_item = filteredData;
  if(filteredData.length){
   return res.status(200).json({ count: filteredData.length, message: responseArray });
  }
  else{
   return res.status(404).json({ status: 'false', message: "data not found" });
  }
};


 module.exports={
   sendProductData,
   filteredProduct,
   filteredProductById,
   sendBlogData,
   sendFilteredItems,
   filteredProductByPrice,
   filteredProductByMainSearch
 }