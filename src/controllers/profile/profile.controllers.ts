import {Request, Response} from "express";



import { connect } from '../../connect_database';

export async function _get_(req: Request, res: Response){
    const db = await connect();
    let data = await db.query("SELECT * FROM publications");
    return res.render("profile/profile", {userContent:data[0]});
}