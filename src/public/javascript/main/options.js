$(document).ready( () =>{
    
    $("#windowCreatePublication").click( () => {
        $("#boxCreatePublication").hide();
        $(".preview").hide();
        $('#navigation').show();
        $(".divClosePublication").hide();
        $("#descriptionNewPost").text("");
    });

    $("#eliminarFileCreatePublication").click( () => {
        $(".preview").hide();
        $(".divClosePublication").hide();
    })



    $("#selectImagePublication").click( () => {
        $('#selectVideoPublication').val("");
        $(".preview").hide();
        $("video").get(0).pause();
        $("#viewVideo").hide();
        $(".divClosePublication").hide();
        viewImage();
        
    })
    
    $("#selectVideoPublication").click( () => {
        $('#selectImagenPublication').val("");
        $(".preview").hide();
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
            "--btnInteractionPost": "#d6d2d2a1"
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
            "--btnInteractionPost": "#070707a1"
        });
        
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

