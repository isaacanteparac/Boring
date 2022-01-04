import { Request, Response } from 'express'



//TITLE:DATABASE CONNECTION
import { connect } from '../../../connect_database';


//TITLE:INTERFACE
import { IPublication } from '../interfaces/publication.interface';

import { calcularLongitudBytes } from "../../../lib/helpers";

export async function _get_(req: Request, res: Response) {
    return res.render("publication/publications");
}


export async function _post_(req: any, res: Response) {
    const db = await connect();
    let new_publication: IPublication = req.body;

    new_publication.id_user = req.user.id;
    
    if(calcularLongitudBytes(new_publication.file_content))
        console.log(new_publication.file_content);
        console.log("DESCRPTION "+new_publication.description);
        console.log("ID_USER "+req.user.id);
        await db.query("INSERT INTO publications SET ?", [new_publication]);
        req.flash('success', 'Your post was sent.')
    return res.redirect("/profile");
}