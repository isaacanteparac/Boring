import { Request } from "express";
import { encryptPassword, decryptPassword } from "../lib/helpers";

import passport from "passport";
import LocalStrategy from "passport-local";
import { IUser } from "../interfaces/register/user.interface";
import { connect } from "../connect_database";

passport.use(
  "signup",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req: Request, username: string, password: string, done: any) => {
      const { fullname, email, repeatpassword } = req.body;

      if (password === repeatpassword) {
        const db = await connect();
        password = await encryptPassword(password);
        let newUser: IUser = {
          fullname,
          username,
          email,
          password,
        };
        const result: any = await db.query("INSERT INTO users SET ?", [
          newUser,
        ]);
        console.log("USER ADD ");
        newUser.id = result[0].insertId;
        return done(null, newUser);
      } else {
        console.log("EL PASSWORD NO COINCIDE");
        return done(null, false);
      }
    }
  )
);

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (res: Response, username: string, password: string, done: any) => {
      const db = await connect();
      const verifUser: any = await db.query(
        "SELECT * FROM users WHERE username = ?",
        [username]
      );
      if (verifUser.length > 0) {
        const user = verifUser[0];
        const verifiPassword = await decryptPassword(
          password,
          user[0].password
        );
        if (verifiPassword) {
          done(null, user[0]);
        } else {
          done(null, false);
        }
      } else {
        done(null, false);
      }
    }
  )
);

passport.serializeUser((user: any, done: any) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done: any) => {
  const db = await connect();
  const rows = await db.query("SELECT * FROM users WHERE id = ?", [id]);
  done(null, rows[0]);
});
