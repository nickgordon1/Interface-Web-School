$(document).ready(function(){
                                 
      var listItems = [];
  
      var storedItems = localStorage.getItem("olContent");
  
      if (storedItems) {
      $('ol').html(storedItems);
      }

      function renderAll() {
      $('ol').html('');
      
      for (var i = 0; i < listItems.length; i++) {
        $('ol').append("<li>" + listItems[i]);
      }
      
      localStorage.setItem("olContent", $('ol').html() + "" );
      }

      $('.form').submit(function(e) {
      e.preventDefault();
      
      listItems.push( $('input').val() );
      renderAll();

      $('.input').val('');
      
      $( "li" ).click(function() {
      $( this ).fadeOut();
            
      });
    
    });

});