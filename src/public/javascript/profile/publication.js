$(document).ready( () => {


    var btnClick = document.getElementById('previewPublication');

    btnClick.onmousedown =function() {  
        $("#viewPublication").show();
        console.log("Estoy presionado, haz lo que necesites...");
    };
    
    btnClick.onmouseup = function() {
        $("#viewPublication").hide();
        console.log("dejo de hacer click")
    };
});

