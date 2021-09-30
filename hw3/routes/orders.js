//Caroline Cavaliere
var express = require('express');
var router = express.Router();
var dbms_promise = require('./dbms_promise');

/* Post month's orders. */
router.post('/', function(req, res, next) {
  var str = JSON.parse((JSON.stringify(req.body)));
  var month = JSON.stringify(str.month);
  month = month.toUpperCase();
  console.log(month);
  var chocolate = {"topping":"chocolate", "quantity":dbms_promise.dbquery(`SELECT SUM(QUANTITY) FROM ORDERS WHERE MONTH=${month} AND TOPPING='chocolate'`)};
  var plain = {"topping":"plain", "quantity":dbms_promise.dbquery(`SELECT SUM(QUANTITY) FROM ORDERS WHERE MONTH=${month} AND TOPPING='plain'`)};
  var cherry = {"topping":"cherry", "quantity":dbms_promise.dbquery(`SELECT SUM(QUANTITY) FROM ORDERS WHERE MONTH=${month} AND TOPPING='cherry'`)};
  var pastOrders = [cherry, chocolate, plain];
  var orderString = JSON.stringify(pastOrders); //send JSON string
  console.log(pastOrders);
  res.send(pastOrders);
});

module.exports = router;