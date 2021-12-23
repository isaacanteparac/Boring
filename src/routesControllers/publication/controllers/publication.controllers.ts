import { Request, Response } from 'express'



//TITLE:DATABASE CONNECTION
import { connect } from '../../../connect_database';


//TITLE:INTERFACE
import { IPublication } from '../interfaces/publication.interface';

export async function _get_(req: Request, res: Response) {
    return res.render("publication/publications");
}


export async function _post_(req: Request, res: Response) {
    const db = connect();
    
}