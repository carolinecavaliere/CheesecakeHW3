//Caroline Cavaliere
var express = require('express');
var router = express.Router();
var dbms_promise = require('./dbms_promise');

//Helper function to get quantities of cheesecake toppings from the database
async function quantity(topping, month){
  //Ensures that data is retrieved before updating site
  let quantity = await dbms_promise.dbquery("SELECT SUM(QUANTITY) FROM ORDERS WHERE MONTH = '" + month + "' AND TOPPING = '" + topping + "';");
  if(!quantity){
    return 0;
  }
  return quantity[0]['SUM(QUANTITY)'];
}

/* Post month's orders. */
router.post('/', async function(req, res, next) {
  var month = req.body.month.toUpperCase();
  //Get quantity of each cheesecake topping for the specified month
  var plain = await quantity("plain", month);
  //If there isn't data for this topping change to 0
  if(plain == null){
    plain = 0;
  }
  var cherry = await quantity("cherry", month);
  if(cherry == null){
    cherry = 0;
  }
  var chocolate = await quantity("chocolate", month);
  if(chocolate == null){
    chocolate = 0;
  }
  var pastOrders = [{"topping":"cherry", "quantity":cherry},{"topping":"chocolate", "quantity":chocolate},{"topping":"plain", "quantity":plain}];
  //Send JSON string
  var orderString = JSON.stringify(pastOrders); 
  res.send(orderString);
});

module.exports = router;