import bcryptjs from 'bcryptjs';
import {Blob} from 'node:buffer';

export async function encryptPassword(password:string){
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(password, salt);
    return hash;
};


export async function decryptPassword(password:string, hashPassword:string) {
    try {
        return await bcryptjs.compare(password, hashPassword);
    }
    catch(e){
        console.log(e);
    }
}


export async function calcularLongitudBytes(string_: string){
    if (typeof string_ !== 'string') {
        console.log('El argumento «cadena» debe ser una cadena de caracteres (texto).');
        return false;
    }
    const stringSize = new Blob([string_]).size;
    if(stringSize <=15360){
        console.log("OK SIZE"+stringSize);
        return true;
    }
    else{
        console.log("NO SIZE"+stringSize);
        return false;
    }
}






