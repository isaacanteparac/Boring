import {Request, Response, NextFunction} from "express";

export async function _get_(req: Request, res: Response){
    return res.render("chat/chats");
}

export async function _post_(req: Request, res: Response){
    return;
}