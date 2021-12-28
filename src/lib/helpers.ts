import bcryptjs from 'bcryptjs';


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




