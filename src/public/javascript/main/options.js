

$(document).ready( () =>{
    $("#windowCreatePublication").click( () => {
        $("#boxCreatePublication").hide();
        $(".preview").hide();
        $('#navigation').show();
        $(".divClosePublication").hide();
    });

    $("#eliminarFileCreatePublication").click( () => {
        $(".preview").hide();
        $(".divClosePublication").hide();
    })



    $("#selectImagePublication").click( () => {
        $('#selectVideoPublication').val("");
        $("video").get(0).pause();
        $("#viewVideo").hide();
        $(".divClosePublication").hide();
        viewImage();
        
    })
    
    $("#selectVideoPublication").click( () => {
        $('#selectImagenPublication').val("");
        
        $("#viewImagen").hide();
        $(".divClosePublication").hide();
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

