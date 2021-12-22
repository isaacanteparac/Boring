import { Request } from "express"
import {encryptPassword, decryptPassword} from "../lib/helpers";


import passport from "passport";
import LocalStrategy from "passport-local";
import { IUser } from "../routesControllers/registerUser/interfaces/user.interface";
import {connect} from "../connect_database";


passport.use('signup', new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true
}, async (req: Request, username: string, password: string, done:any )=>{
    const {fullname, email, repeatpassword} = req.body;
    const newUser: IUser = {
        fullname,
        username,
        email,
        password
    };
    const db = await connect();
    newUser.password = await encryptPassword(newUser.password);
    await db.query("INSERT INTO users SET ?", [newUser]);
    return done(null, newUser);
    if(newUser.password === repeatpassword){
        
        newUser.password = await encryptPassword(newUser.password);
        await db.query("INSERT INTO users SET ?", [newUser]);
        console.log("USER ADD ");
        return done(null, newUser);
    }
    else{
        console.log("EL PASSWORD NO COINCIDE");
        return done(null, false);
    }
}))

/*passport.serializeUser((user: any, done: any) => {
    done(null, user.id);
  });
  
passport.deserializeUser(async (id: number, done: any) => {
    const db = await connect();
    const rows = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    done(null, rows[0]);
});*/