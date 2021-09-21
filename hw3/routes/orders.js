//Caroline Cavaliere
var express = require('express');
var router = express.Router();

/* Post month's orders. */
router.post('/', function(req, res, next) {
  const orderArr = [{"topping":"chocolate", "quantity":"2"}, {"topping":"plain", "quantity":"20"}, {"topping":"cherry", "quantity":"12"}]; 
  var orderString = JSON.stringify(orderArr); //send JSON string
  res.send(orderString);
});

module.exports = router;