import { Request, Response } from 'express'



//TITLE:DATABASE CONNECTION
import { connect } from '../../../connect_database';


//TITLE:VARIABLE


//TITLE:INTERFACE
import { IUser } from '../interfaces/user.interface';

export async function _get_(req: Request, res: Response) {
    return res.render("register/signup");
}

export async function _post_(req: Request, res: Response) {
    const {fullname, username, email, password, repeatpassword} = req.body;
    const newUser: IUser = {
        fullname,
        username,
        email,
        password
    };

    if(newUser.password === repeatpassword){
        const db = await connect();
        await db.query("INSERT INTO user SET ?", [newUser]);
        console.log("USER ADD ");
    }
    else{
        console.log("EL PASSWORD NO COINCIDE");
    }
    res.redirect('/sign-up');
    
}