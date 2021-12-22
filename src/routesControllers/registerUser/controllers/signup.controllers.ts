import { Request, Response, NextFunction } from "express";
import passport from "passport";


//TITLE:DATABASE CONNECTION
import { connect } from '../../../connect_database';

//TITLE:INTERFACE
import { IUser } from '../interfaces/user.interface';



export async function _get_(req: Request, res: Response) {
    return res.render("register/signup");
}

export async function _post_(req: Request, res: Response, next:NextFunction) {
    passport.authenticate("signup",{
        successRedirect: '/post',
        failureRedirect: '/sign-up',
        failureFlash: true
    })(req, res, next);
}