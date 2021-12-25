$(document).ready( () => {
     let url_= "http://localhost:3720/";
     let currentUrl = window.location;
     if(currentUrl != url_ 
     && currentUrl != url_+"sign-up" &&
     currentUrl != url_+"login"){
          $("#headi").show();
          $("#navigation").show();

          let scrollLocation  = window.pageYOffset;
          window.onscroll = function() {
          let scrollUser = window.pageYOffset;
          if(scrollLocation >= scrollUser){
               document.getElementById('navigation').style.display = 'block';
          }
          else{
               document.getElementById('navigation').style.display = 'none';
          }
          scrollLocation = scrollUser;
          }
          if(currentUrl === url_+"comments"){
               $("#navigation").hide();
          }


          $("#createPublication").click(() =>{
               textareaAutoResize()
               $("#navigation").hide();
               $(".optionViewPreview").hide();
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


