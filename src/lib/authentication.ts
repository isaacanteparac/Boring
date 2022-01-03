import {Request, Response, NextFunction} from "express";

export function adminIsLoggedIn(req: any, res: Response, next: NextFunction) {
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}