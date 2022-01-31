export function decFile(string_:string){
    /*hacer que pueda identificar que tipo de file
     es si es vide, imagen, audio, doc y asi poder presentar el contenido*/
    return "data:image/*;base64,"+string_
}

export function convertNumber(num: number){
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
     }
     if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
     }
     if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
     }
     return num;
}