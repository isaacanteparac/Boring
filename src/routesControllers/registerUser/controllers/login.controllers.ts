import { Request, Response } from 'express'

//TITLE:DATABASE CONNECTION
import { connect } from '../../../connect_database';



export async function _getInformation_(req: Request, res: Response) {
    return res.render("register/information");
}

export async function _get_(req: Request, res: Response) {
    return res.render("register/login", {

    });
}

export async function _post_(req: Request, res: Response) {
    console.log("this is post login")
}





