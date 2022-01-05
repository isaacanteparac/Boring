import { Request, Response, NextFunction } from "express";
import passport from "passport";




export async function _get_(req: Request, res: Response) {
    return res.render("register/signup");
}

export async function _post_(req: Request, res: Response, next:NextFunction) {
    passport.authenticate("signup",{
        successRedirect: '/publication',
        failureRedirect: '/sign-up',
        failureFlash: true
    })(req, res, next);
}