import {Request, Response} from "express";



import { connect } from '../../../connect_database';

export async function _get_(req: Request, res: Response){
    return res.render("profile/profile");
}