import express, {Application}  from "express";
import morgan  from "morgan";

//TITLE:ROUTES
import loginRouter from "./routes/registerUser/routes/login.routes";

export class App {

    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set("port", this.port || process.env.PORT || 3720);
    }

    middlewares(){
        this.app.use(morgan("dev"));
    }

    routes(){
        this.app.use(loginRouter);
    }

    async listen()
    {
        console.clear();
        console.log("\n     █▀▀█ █▀▀█ █▀▀█ █▀▀▄ █▀▀█ █▀▀▄ ");
        console.log("     █    █▄▄█ █▄▄▀ █▀▀▄ █  █ █  █");
        console.log("     █▄▄█ ▀  ▀ ▀ ▀▀ ▀▀▀  ▀▀▀▀ ▀  ▀ ");
        console.log("          SINGULARITY INC © 2021");

        await this.app.listen(this.app.get("port"));
        console.log("\nSERVER ON PORT "+ this.app.get("port"));
    }
}





