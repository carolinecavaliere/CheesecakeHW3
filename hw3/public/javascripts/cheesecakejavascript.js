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

});