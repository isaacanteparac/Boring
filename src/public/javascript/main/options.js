

$(document).ready( () =>{
    $("#windowCreatePublication").click( () => {
        $("#boxCreatePublication").hide();
        $(".preview").hide();
        $('#navigation').show();
    });

    $("#eliminarFileCreatePublication").click( () => {
        $(".preview").hide();
        $("#eliminarFileCreatePublication").hide();
    })

    $("#selectImagePublication").click( () => {
        
    })

    $("#selectImagePublication").click( () => {
        $('#selectVideoPublication').val("");
        $("#viewVideo").hide();
        $("#eliminarFileCreatePublication").hide();
        viewImage();
        
    })
    
    $("#selectVideoPublication").click( () => {
        $('#selectImagenPublication').val("");
        $("#viewImagen").hide();
        $("#eliminarFileCreatePublication").hide();
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
    $("#eliminarFileCreatePublication").show();


    if (!archivos || !archivos.length) {
        $imagenPrevisualizacion.src = "";
        return;
    }
    const primerArchivo = archivos[0];
    const objectURL = URL.createObjectURL(primerArchivo);
    $imagenPrevisualizacion.src = objectURL;
    });
}

