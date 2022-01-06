import { Request, Response } from 'express'



//TITLE:DATABASE CONNECTION
import { connect } from '../../connect_database';


//TITLE:INTERFACE
import { IPublication } from '../../interfaces/publication/publication.interface';

import { calcularLongitudBytes,
        decodeBase64 } from "../../lib/helpers";

export async function _get_(req: Request, res: Response) {
    const db = await connect();
    let data = await db.query("SELECT * FROM publications");
    //console.log(data[0][0].file_content);
    //const ms = decodeBase64(data[0][0].file_content);

    return res.render("publication/publications", {postUserContent:data[0]});
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

export async function _put_likes(req: Request, res: Response) {
    const db = await connect();
    const { id } = req.params;
    let new_publication: IPublication;
    //new_publication.likes += 1;
    //await db.query('UPDATE publications set ? WHERE id = ?', [new_publication, id]);
    res.redirect("/publication");
}

export async function _delete_likes(req: any, res: Response) {
    const db = await connect();
    const { id } = req.params;
    let new_publication: IPublication;
    new_publication.likes -= 1;
    await db.query("INSERT INTO publications SET ?", [new_publication]);
    return res.redirect("/oublication");
}