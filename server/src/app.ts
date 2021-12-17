import express, {Application}  from "express";





export class App {

    private app: Application;

    constructor(){
        this.app = express();
    }

    async listen()
    {
        console.clear();
        console.log("\n     █▀▀█ █▀▀█ █▀▀█ █▀▀▄ █▀▀█ █▀▀▄ ");
        console.log("     █    █▄▄█ █▄▄▀ █▀▀▄ █  █ █  █");
        console.log("     █▄▄█ ▀  ▀ ▀ ▀▀ ▀▀▀  ▀▀▀▀ ▀  ▀ ");
        console.log("          SINGULARITY INC © 2021");
        this.app.set("port", process.env.PORT || 3720);
        await this.app.listen(this.app.get("port"));

        console.log("\nSERVER ON PORT "+ this.app.get("port"));
    }
}





