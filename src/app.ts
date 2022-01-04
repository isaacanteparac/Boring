import express, {Application, Response, Request, NextFunction}  from "express";
import morgan  from "morgan";
import BodyParser from 'body-parser';

var validator = require('express-validator');

//NOTE:IMPORTS PARA EXEC HANDLEBARS
import path from "path";
import { engine } from "express-handlebars";

//NOTE: MESSAGE DE ALERT A FRONTEND
import flash from "connect-flash";


//NOTE:IMPORTS PARA EXEC LA AUTH DE USER
import session from "express-session";
import passport from "passport";
//import vali from 'express-validator';
const MySQLStore = require('express-mysql-session')(session);
require('./lib/passport');


//TITLE:ROUTES
import loginRouter from "./routesControllers/registerUser/routes/login.routes";
import signupRouter from "./routesControllers/registerUser/routes/signup.routes";
import publicationRouter from "./routesControllers/publication/routes/publication.routes";
import commentRouter from "./routesControllers/comments/routes/comments.routes";
import profileRouter from "./routesControllers/profile/routes/profile.routes";
import chatRouter from "./routesControllers/chats/routes/chats.routes";


export class App {

    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.globalVar();
        this.routes();
        this.public_();
    }

    async settings(){
        this.app.set("port", this.port || process.env.PORT || 3720);
        this.app.set("views", path.join(__dirname, "./views"));

        const handlebarsConfig: object = {
			defaultLayout: 'main',
			layoutsDir: path.join(this.app.get("views"), "layout"),
			partialsDir:  path.join(this.app.get("views"), "partials"),
			extname: ".hbs",
            helpers: require("./lib/handlebars")
		};

        this.app.engine(".hbs", engine(handlebarsConfig));
        this.app.set("view engine", ".hbs");
    }

    middlewares(){
        this.app.use(morgan("dev"));
        
        this.app.use(BodyParser.json({ limit: '15mb' }));
        this.app.use(BodyParser.urlencoded({
            limit: '15mb',
            extended: true
        }));
       

        this.app.use(session({
            secret:  process.env.SESSION_SECRET || 'i*/ws7d6554dsf/+#',
            resave: false,
            saveUninitialized: false,
            store: new MySQLStore({
                host: 'localhost',
                user: 'thisisisaacac',
                password: '2002',
                database: 'duaui'
              })
        }));
        this.app.use(flash());
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        //this.app.use(validator());
    }

    globalVar(){
        this.app.use((req:any, res:Response, next:NextFunction ) =>{
            this.app.locals.message = req.flash('message');
            this.app.locals.success = req.flash('success');
            this.app.locals.failed = req.flash('failed');
            this.app.locals.user = req.user;
            console.log("USER "+ req.Body);
            next();
        })
    }

    routes(){
        this.app.use(loginRouter);
        this.app.use("/sign-up", signupRouter);
        this.app.use("/publication", publicationRouter);
        this.app.use("/comments", commentRouter);
        this.app.use("/profile", profileRouter);
        this.app.use("/chats", chatRouter);
    }

    public_(){
        this.app.use(express.static(path.join(__dirname, "./public/")))
    }

    async listen()
    {
        console.clear();
        console.log("\n                 █▄██▄█              ▄▄▄▄▄");
        console.log("        █▄█▄█▄█▄█▐█┼██▌█▄█▄█▄█▄█   ▄█▄█▄█▄█▄");
        console.log("        ███┼█████▐████▌█████┼███      ░░░");
        console.log("        █████████▐████▌█████████      ░░░");
        console.log("\n              Dev By Isaac Antepara C.");
        console.log("  Invented, Transformed, Created and Destroyed");
        await this.app.listen(this.app.get("port"));
        console.log("\nSERVER ON PORT "+ this.app.get("port"));
    }
}


