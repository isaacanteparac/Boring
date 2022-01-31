export function createPost(){
    $("#createPublication").click(() =>{
        textareaAutoResize()
        $("#navigation").show();
        $(".optionViewPreview").hide();
        $("#divBlurid").show();
        $("#boxCreatePublication").show();
   })
}


export function closeComponetCreatePost() {
  $("#windowCreatePublication").click(() => {
    $("#navigation").show();
    $("#divBlurid").hide();
    $("#boxCreatePublication").hide();
    $(".preview").hide();
    $(".optionViewPreview").hide();
    $(".controlsVideo").hide();
    $(".divClosePublication").hide();
    $("#descriptionNewPost").text("");
  });
}

export function deleteFilePreSendPost() {
  $("#eliminarFileCreatePublication").click(() => {
    $(".preview").hide();
    $(".divClosePublication").hide();
    $(".optionViewPreview").hide();
    $(".controlsVideo").hide();
  });
}

export function imagePreviewCreatePost() {
  $("#selectImagePublication").click(() => {
    $("#selectVideoPublication").val("");
    $("#selectImagePublication").val("");
    $(".preview").css("border-radius", "10px");
    $(".preview").hide();
    $(".controlsVideo").hide();
    $("video").get(0).pause();
    $(".optionViewPreview").hide();
    $("#viewVideo").hide();
    $("#viewAudio").hide();
    $(".divClosePublication").hide();
    viewImage();
  });
}

export function videoPreviewCreatePost() {
  $("#selectVideoPublication").click(() => {
    $("#selectImagenPublication").val("");
    $("video").get(0).pause();
    $("#selectVideoPublication").val("");
    $(".preview").hide();
    $(".optionViewPreview").hide();
    $(".controlsVideo").hide();
    $("#viewImagen").hide();
    $("#viewAudio").hide();
    $(".divClosePublication").hide();
  });
}

export function soundPreviewCreatePost() {
  $("#selectAudioPublication").click(() => {
    $("#selectImagenPublication").val("");
    $("#selectVideoPublication").val("");
    $("video").get(0).pause();
    audio.pause();
    $(".preview").css("border-radius", "10px");
    $("#selectAudioPublication").val("");
    $(".optionViewPreview").hide();
    $(".controlsVideo").hide();
    $("#viewVideo").hide();
    $("#viewImagen").hide();
    $(".preview").show();
    $("#viewAudio").show();
    $(".divClosePublication").hide();
  });
}

export function btnSendCreatePost() {
  $("#sendPublication").click(() => {
    $("#navigation").show();
    $(".optionViewPreview").hide();
    $("#boxCreatePublication").hide();
  });
}

export function viewImage() {
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


export function textareaAutoResize() {
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
