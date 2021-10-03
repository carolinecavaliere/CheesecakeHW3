//Caroline Cavaliere
var express = require('express');
var router = express.Router();
var dbms_promise = require('./dbms_promise');

//Helper function to add new order to database
async function neworder(quantity, topping, notes){
  let order = await dbms_promise.dbquery("INSERT INTO ORDERS (MONTH, DAY, QUANTITY, TOPPING, NOTES) VALUES('APR', '2', '"+quantity+"', '" + topping+"', '" + notes+"');");
  if(!order){
    return 0;
  }
  return order;
}

//Insert into database
router.post('/', async function(req, res, next) {
    var new_order = await neworder(req.body.quantity, req.body.topping, req.body.notes);
});
  

module.exports = router;