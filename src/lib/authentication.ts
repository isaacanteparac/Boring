import {Response, NextFunction} from "express";

export function isLoggedIn(req: any, res: Response, next: NextFunction) {
        if (req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/login');
    }
};