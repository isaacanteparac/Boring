$(document).ready( () =>{
    
    $("#windowCreatePublication").click( () => {
        $('#navigation').show();
        $("#boxCreatePublication").hide();
        $body.bind('scroll', function() {
            // "Desactivar" el scroll horizontal
            if ($body.scrollLeft() !== 0) {
                $body.scrollLeft(0);
            }
        });
        $(".preview").hide();
        $(".optionViewPreview").hide();
        $(".controlsVideo").hide();
        
        $(".divClosePublication").hide();
        $("#descriptionNewPost").text("");

    });

    $("#windowOptionUserFriendChat").click( () => {
        $("#boxOptionsUserFriendChat").hide();
        $('#navigation').show();
    });

    $("#userFriendPhoto").click( () => {
        $("#boxOptionsUserFriendChat").show();
        $('#navigation').hide();
    });

    $("#eliminarFileCreatePublication").click( () => {
        $(".preview").hide();
        $(".divClosePublication").hide();
        $(".optionViewPreview").hide();
        $(".controlsVideo").hide();
        
    })



    $("#selectImagePublication").click( () => {
        $('#selectVideoPublication').val("");
        $(".preview").css({
            "border-radius": "10px"
        });
        $(".preview").hide();
        $(".controlsVideo").hide();
        $("video").get(0).pause();
        $(".optionViewPreview").hide();
        $("#viewVideo").hide();
        $(".divClosePublication").hide();
        viewImage();
        
    })
    
    $("#selectVideoPublication").click( () => {
        $('#selectImagenPublication').val("");
        $(".preview").hide();
        $(".optionViewPreview").hide();
        $(".controlsVideo").hide();
        $("#viewImagen").hide();
        $(".divClosePublication").hide();
    })

    $("#modeSun").click( () =>{
        $("#modeSun").hide();
        $("#modeMoon").show();
        $("*").css({
            "--white": "#000",
            "--lowlowWhite": "#333333",
            "--lowWhite": "#191919",
            "--backgroundComponent": "#fff",
            "--colorActiveBtn": "#b6b3b3",
            "--borderBlack": "#cccccc",
            "--backgrounBody": "#d7d7d7",
            "--backgroundScroll": "#e6e6e6",
            "--btnInteractionPost": "#d6d2d2a1",
            "--colorIconsHeadMenu": "#000",
            "--backgrounWindow": "#fff",
            "--actionBtnDefaul": "#B9b5b5"
            
        });
        
    })

    $("#modeMoon").click( () =>{
        $("#modeMoon").hide();
        $("#modeSun").show();
        $("*").css({
            "--white": "#fff",
            "--lowlowWhite": "#b6b6b6",
            "--lowWhite": "#e7e7e7",
            "--backgroundComponent": "#050505",
            "--colorActiveBtn": "#000000",
            "--borderBlack": "#0d0d0d",
            "--backgrounBody": "#101113",
            "--backgroundScroll": "#101113",
            "--btnInteractionPost": "#070707a1",
            "--colorIconsHeadMenu": "#fff",
            "--backgrounWindow": "#000",
            "--actionBtnDefaul": "#1f1f1f"
        });
    })

    $("#btnCommentPublication").click( () =>{
        $('#navigation').hide();
        let scrollLocation  = window.pageYOffset;
        window.onscroll = function() {
        let scrollUser = window.pageYOffset;
        if(scrollLocation >= scrollUser){
            document.getElementById('inputCommentUser').style.display = 'block';
        }
        else{
            document.getElementById('inputCommentUser').style.display = 'none';
        }
        scrollLocation = scrollUser;
    }
    })
    



})




function viewImage(){
    const $seleccionArchivos = document.querySelector("#selectImagePublication"),
    $imagenPrevisualizacion = document.querySelector("#viewImagen");

    $seleccionArchivos.addEventListener("change", () => {

    const archivos = $seleccionArchivos.files;

    
    $(".preview").show();
    $("#viewVideo").hide();
    $("#viewImagen").show();
    $(".divClosePublication").show();


    if (!archivos || !archivos.length) {
        $imagenPrevisualizacion.src = "";
        return;
    }
    const primerArchivo = archivos[0];
    const objectURL = URL.createObjectURL(primerArchivo);
    $imagenPrevisualizacion.src = objectURL;
    });
}

