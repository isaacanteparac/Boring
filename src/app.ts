import express, {Application}  from "express";
import morgan  from "morgan";




export class App {

    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
    }

    settings(){
        this.app.set("port", this.port || process.env.PORT || 3720);
    }

    middlewares(){
        this.app.use(morgan("dev"));
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





