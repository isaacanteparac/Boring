import express  from "express";
import morgan  from "morgan";
import session  from "express-session";
import flash  from "connect-flash";
import { engine } from "express-handlebars";
const MySQLStore = require('express-mysql-session')(session);




const {database} = require('./keys');
const path = require('path');

/*INITIALIZATIONS */
const app = express();


/*SETTINGS */
app.set("port", process.env.PORT || 3720);
app.get("/", (req, res) => {
  res.send("USE TYPESCRIPT BACKEND");
});
/*MIDDLEWARES */
//app.use(morgan("start"));


/**GLOBAL VARIABLE*/


/*ROUTES*/

/*PUBLIC */

/*STAR */
async function main(){
    console.clear();
    console.log("\n     █▀▀█ █▀▀█ █▀▀█ █▀▀▄ █▀▀█ █▀▀▄ ");
    console.log("     █    █▄▄█ █▄▄▀ █▀▀▄ █  █ █  █");
    console.log("     █▄▄█ ▀  ▀ ▀ ▀▀ ▀▀▀  ▀▀▀▀ ▀  ▀ ");
    console.log("          SINGULARITY INC © 2021");
    await app.listen(app.get("port"));
    console.log("\nSERVER ON PORT "+ app.get("port"));
};

main();