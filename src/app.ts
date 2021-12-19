import express, {Application, Response, Request, NextFunction}  from "express";
import morgan  from "morgan";
import path from "path";
import { engine } from "express-handlebars";


//TITLE:ROUTES
import loginRouter from "./routesControllers/registerUser/routes/login.routes";

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
    }

    globalVar(){
        this.app.use((req:Request, res:Response, next:NextFunction ) =>{
            next();
        })
    }

    routes(){
        this.app.use(loginRouter);
    }

    public_(){
        this.app.use(express.static(path.join(__dirname, "./public")))
    }

    async listen()
    {
        console.clear();
        console.log("\n   DEVELOPED BY ISAAC ANTEPARA CEREZO");

        await this.app.listen(this.app.get("port"));
        console.log("\nSERVER ON PORT "+ this.app.get("port"));
    }
}





