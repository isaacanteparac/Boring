import { Request, Response } from 'express'



//TITLE:DATABASE CONNECTION
import { connect } from '../../../connect_database';


//TITLE:INTERFACE
import { IPublication } from '../interfaces/publication.interface';

import { calcularLongitudBytes } from "../../../lib/helpers";

export async function _get_(req: Request, res: Response) {
    return res.render("publication/publications");
}


export async function _post_(req: Request, res: Response) {
    const db = await connect();
    const new_publication: IPublication = req.body;
    if(calcularLongitudBytes(new_publication.file_content))
        console.log(new_publication.file_content);
        console.log(new_publication.description);
        await db.query("INSERT INTO publications SET ?", [new_publication]);
        req.flash('success', 'Your post was sent.')
    return res.redirect("/profile");
}