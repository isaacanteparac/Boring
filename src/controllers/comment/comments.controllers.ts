import {Request, Response} from "express";
import { connect } from "../../connect_database";
import { IComments } from "../../interfaces/comment/comments.interface";

export async function _get_(req: Request, res: Response) {
    return res.render("publication/comments");
}

export async function _post_(req: Request, res: Response) {
    const db = await connect();
    let newComment: IComments = req.body;
    await db.query("INSERT INTO comments SET ?", [newComment]);
    return res.redirect("/comments");
}


