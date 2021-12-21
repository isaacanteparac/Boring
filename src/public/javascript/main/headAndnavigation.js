$(document).ready(function() {
     let url_= "http://localhost:3720/";
     let currentUrl = window.location;
     if(currentUrl != url_ 
     && currentUrl != url_+"sign-up" &&
     currentUrl != url_+"login"){
          $("#headi").show();
          $(window).scroll(function() {
               if ($(this).scrollTop() > 0) {
                    $('#navigation').fadeOut();
               } else {
                    $('#navigation').fadeIn();
               }
               
               });
     }
});