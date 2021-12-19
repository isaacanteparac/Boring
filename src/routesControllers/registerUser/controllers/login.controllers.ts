import { Request, Response } from 'express'

//TITLE:DATABASE CONNECTION
import { connect } from '../../../connect_database';





export async function _get_(req: Request, res: Response) {
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM user');


    return res.json(posts[0]);
}

export async function _post_(req: Request, res: Response) {
    console.log("this is post login")
}


export async function _update_(req: Request, res: Response) {
    
}

export async function _delete_(req: Request, res: Response) {
    
}


