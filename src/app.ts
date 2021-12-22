import express, {Application, Response, Request, NextFunction}  from "express";
import morgan  from "morgan";

//NOTE:IMPORTS PARA EXEC HANDLEBARS
import path from "path";
import { engine } from "express-handlebars";

//NOTE: MESSAGE DE ALERT A FRONTEND
//import flash from "connect-flash";

//NOTE:IMPORTS PARA EXEC LA AUTH DE USER
import session from "express-session";
import passport from "passport";
//import validator from 'express-validator';
const MySQLStore = require('express-mysql-session')(session);
require('./lib/passport');

//TITLE:ROUTES
import loginRouter from "./routesControllers/registerUser/routes/login.routes";
import signupRouter from "./routesControllers/registerUser/routes/signup.routes";
import publicationRouter from "./routesControllers/publication/routes/publication.routes";
import { connect } from "./connect_database";


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
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.json());
        this.app.use(session({
            secret: 'thisisisaacac3702',
            resave: false,
            saveUninitialized: false,
            store: new MySQLStore(connect)
        }));
        //this.app.use(flash());
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        //this.app.use(validator());
    }

    globalVar(){
        this.app.use((req:Request, res:Response, next:NextFunction ) =>{
            next();
        })
    }

    routes(){
        this.app.use(loginRouter);
        this.app.use("/sign-up", signupRouter);
        this.app.use("/post", publicationRouter);
    }

    public_(){
        this.app.use(express.static(path.join(__dirname, "./public/")))
    }

    async listen()
    {
        console.clear();
        console.log("\n   DEVELOPED BY ISAAC ANTEPARA CEREZO");
        await this.app.listen(this.app.get("port"));
        console.log("\nSERVER ON PORT "+ this.app.get("port"));
    }
}





