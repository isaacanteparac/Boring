$(document).ready( () =>{
    
    $("#windowCreatePublication").click( () => {
        $('#navigation').show();
        $("#boxCreatePublication").hide();
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
        $('#selectImagePublication').val("");
        $(".preview").css('border-radius','10px');
        $(".preview").hide();
        $(".controlsVideo").hide();
        $("video").get(0).pause();
        $(".optionViewPreview").hide();
        $("#viewVideo").hide();
        $("#viewAudio").hide();
        $(".divClosePublication").hide();
        viewImage();
    })
    
    $("#selectVideoPublication").click( () => {
        $('#selectImagenPublication').val("");
        $("video").get(0).pause();
        $('#selectVideoPublication').val("");
        $(".preview").hide();
        $(".optionViewPreview").hide();
        $(".controlsVideo").hide();
        $("#viewImagen").hide();
        $("#viewAudio").hide();
        $(".divClosePublication").hide();
    })

    $("#selectAudioPublication").click( () => {
        $('#selectImagenPublication').val("");
        $('#selectVideoPublication').val("");
        $("video").get(0).pause();
        audio.pause();
        $(".preview").css('border-radius','10px');
        $('#selectAudioPublication').val("");
        $(".optionViewPreview").hide();
        $(".controlsVideo").hide();
        $("#viewVideo").hide();
        $("#viewImagen").hide();
        $(".preview").show();
        $("#viewAudio").show();
        $(".divClosePublication").hide();
        
    })


    $("#sendPublication").click(() =>{
        $("#navigation").show();
        $(".optionViewPreview").hide();
        $("#boxCreatePublication").hide();
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
            "--backgrounBody": "#e6e6e6",
            "--backgroundScroll": "#e6e6e6",
            "--btnInteractionPost": "#d6d2d2a1",
            "--colorIconsHeadMenu": "#000",
            "--backgrounWindow": "#fff",
            "--actionBtnDefaul": "#B9b5b5",
            "--leftoverBoxDark": "#0e0e0e",
            "--leftoverBoxLigth": "#d7d7d7",
            "--backgroundFile": "radial-gradient(circle at 0% 0%,"+
                "#dcdacf 50%, #b1b1b8 66.67%, #8c8ca3 83.33%, #6e6b8f 100%)"
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
            "--backgrounBody": "#1a1a1a",
            "--backgroundScroll": "#101113",
            "--btnInteractionPost": "#070707a1",
            "--colorIconsHeadMenu": "#fff",
            "--backgrounWindow": "#000",
            "--actionBtnDefaul": "#1f1f1f",
            "--leftoverBoxDark": "#101113",
            "--leftoverBoxLigth": "#313131",
            "--backgroundFile":  "radial-gradient(circle at 0% 0%,"+ 
                "#313130 50%, #222127 66.67%, #15131e 83.33%, #080016 100%)"
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

    $(".btnClosrMessage").click( () =>{
        $(".content_message").hide();
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

