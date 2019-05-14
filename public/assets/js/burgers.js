$(function() {

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#name").val().trim(),
          devoured: false
        };
    
        // Send the POST request.
        $.ajax("/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            location.reload();
          }
        );
      });
      
    $(".eat").on("click", function(event) {
      var id = $(this).data("id");
      
      var changeDevour = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/burgers/" + id, {
        type: "PUT",
        data: changeDevour
      }).then(
        function() {
          console.log("changed devour to", true);
          //To get the updated list
          location.reload();
        }
      );
    });

    $(".delete").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    });
  

  
