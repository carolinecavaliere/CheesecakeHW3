//Caroline Cavaliere
$(document).ready(function(){
    $("#orderbutton").click(function(){
      //Check notes to see if the customer is vegan and sends warning accordingly
          var notes = $("#notes").val();
      if(notes.includes("vegan")){
          alert("Warning: Our cheesecake contains dairy!");
      }
      else{
          //Removes order options from view once order is placed
          $("form").hide();
          $("#orderdetails").append("Thank you! Your order has been placed. ");

          //Displays customer's order details
          var quantity = $("#quantity").find(":selected").val();
          if($("#Chocolate").is(":checked")){
              $("#orderdetails").append("Your Order Details: "+quantity+" Chocolate Cheesecake(s)");
          }
          else if($("#Plain").is(":checked")){
              $("#orderdetails").append("Your Order Details: "+quantity+" Plain Cheesecake(s)");
          }
          else{
              $("#orderdetails").append("Your Order Details: "+quantity+" Cherry Cheesecake(s)");				
          }
          $("#orderdetails").append(" Notes: "+notes);
      }
    });	

    //Change text of dropdown list and bullet list when different month is chosen
    function switchMonth(month){
        $("#dropdown").text(month);
        postOrder(month);
    }

    //Helper function to issue post requesting info about a specific month's orders
    function postOrder(month){
        $.post("/orders", {month: month}, function(data) {
                var orders = JSON.parse(data);
                $("#cherryOrders").text(orders[0].quantity + " " + orders[0].topping);
                $("#chocolateOrders").text(orders[1].quantity + " " + orders[1].topping);
                $("#plainOrders").text(orders[2].quantity + " " + orders[2].topping);
            });
    }

    //Dropdown elements respond to clicks
    $('#Jan').click(function(){ switchMonth("Jan"); });
    $('#Feb').click(function(){ switchMonth("Feb"); });
    $('#Mar').click(function(){ switchMonth("Mar"); });
    $('#Apr').click(function(){ switchMonth("Apr"); });
    $('#May').click(function(){ switchMonth("May"); });
    $('#Jun').click(function(){ switchMonth("Jun"); });
    $('#Jul').click(function(){ switchMonth("Jul"); });
    $('#Aug').click(function(){ switchMonth("Aug"); });
    $('#Sep').click(function(){ switchMonth("Sep"); });
    $('#Oct').click(function(){ switchMonth("Oct"); });
    $('#Nov').click(function(){ switchMonth("Nov"); });
    $('#Dec').click(function(){ switchMonth("Dec"); });

    });
      

    