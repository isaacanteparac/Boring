$(document).ready( () => {
     let url_= "http://localhost:3720/";
     let currentUrl = window.location;
     if(currentUrl != url_ 
     && currentUrl != url_+"sign-up" &&
     currentUrl != url_+"login"){
          $("#headi").show();
          $("#navigation").show();

          $(window).scroll( () => {
               if ($(this).scrollTop() > 100 ){
                    $('#navigation').hide();
               } else {
                    $('#navigation').show();
               }
               
               });

          $("#createPublication").click(() =>{
               textareaAutoResize()
               $("#navigation").hide();
               $("#boxCreatePublication").show();
          })

     }
     else{
          $(".contentApp").css("margin-top", "0");
     }
});


function textareaAutoResize() {
     document.querySelectorAll('#descriptionPublication').forEach(function (element) {
       element.style.boxSizing = 'border-box';
       var offset = element.offsetHeight - element.clientHeight;
       element.addEventListener('input', function (event) {
         event.target.style.height = 'auto';
         event.target.style.height = event.target.scrollHeight + offset + 'px';
       });
       element.removeAttribute('data-autoresize');
     });
   }


