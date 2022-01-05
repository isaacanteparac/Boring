import { NextFunction, Request, Response } from 'express'
import passport from "passport";



export async function _getInformation_(req: Request, res: Response) {
    return res.render("register/information");
}

export async function _get_(req: Request, res: Response) {
    return res.render("register/login", {

    });
}

export async function _post_(req: Request, res: Response, next: NextFunction) {
    passport.authenticate("login",{
        successRedirect: '/publication',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
}





