import { Request, Response } from 'express'

//TITLE:DATABASE CONNECTION
import { connect } from '../../../connect_database';

//TITLE:INTERFACE
import { IUser } from '../inteface/user.interface';



export async function _get_(req: Request, res: Response) {
    console.log("hola");
    return res.json("esto es un get");
}

export async function _post_(req: Request, res: Response) {
    console.log("this is post login")
}


export async function _update_(req: Request, res: Response) {
    
}

export async function _delete_(req: Request, res: Response) {
    
}


