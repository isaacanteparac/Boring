$(document).ready( () => {
    const id_inFile = "file_content";


    $("#selectImagePublication").click( ()=>{
        document.getElementById('selectImagePublication').addEventListener('change', handleFileSelect, false);
    })

    $("#selectVideoPublication").click( ()=>{
        document.getElementById('selectVideoPublication').addEventListener('change', handleFileSelect, false);
    })

    $("#selectAudioPublication").click( ()=>{
        document.getElementById('selectAudioPublication').addEventListener('change', handleFileSelect, false);
    })

    $("#selectFilePublication").click( ()=>{
        document.getElementById('selectFilePublication').addEventListener('change', handleFileSelect, false);
    })



    function handleFileSelect(evt) {
        var f = evt.target.files[0];
        var reader = new FileReader();
        reader.onload = (function(theFile) 
        {   
            return function(e) {
                var binaryData = e.target.result;
                var base64String = window.btoa(binaryData);
                document.getElementById(id_inFile).value = base64String
                console.log(document.getElementById(id_inFile).value);
            };
            
        })(f);
        reader.readAsBinaryString(f);
    }


})



function fileExtensions(datos, exten) {
	var extension = datos.substring(datos.lastIndexOf('.') + 1).toLowerCase();
	var extensionValida = exten.indexOf(extension);

	if(extensionValida < 0) {
        return false;
    } 
    else {
        return true;
    }
}

function fileSize(datos) {
    if (datos.files && datos.files[0]) {
        var pesoFichero = datos.files[0].size/1024;
        if(pesoFichero <=15360) {
            alert("tipo de archivo permitodo por supeso de: "+pesoFichero)
            return true;
        } 
        else {  
            console.log('El peso maximo permitido es' + pesoPermitido + 
            ' KBs Su fichero tiene: '+ pesoFichero +' KBs');
            return false;
        }
    }
}