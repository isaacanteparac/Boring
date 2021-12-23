
$(document).ready( () =>{
    $("#windowCreatePublication").click( () => {
        $("#boxCreatePublication").hide();
        $(".preview").hide();
        $('#navigation').show();
    });

    $("#eliminarFileCreatePublication").click( () => {
        $(".preview").hide();
    })

    viewImage();



})




function viewImage(){
    const $seleccionArchivos = document.querySelector("#selectImagePublication"),
    $imagenPrevisualizacion = document.querySelector("#previewFileUser");

    $seleccionArchivos.addEventListener("change", () => {

    const archivos = $seleccionArchivos.files;

    $(".preview").show();

    if (!archivos || !archivos.length) {
        $imagenPrevisualizacion.src = "";
        return;
    }
    const primerArchivo = archivos[0];
    const objectURL = URL.createObjectURL(primerArchivo);
    $imagenPrevisualizacion.src = objectURL;
    });
}
