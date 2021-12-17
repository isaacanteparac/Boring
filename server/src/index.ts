import {App} from "./app";
import express, {Application}  from "express";
import morgan  from "morgan";
import session  from "express-session";
import flash  from "connect-flash";
import { engine } from "express-handlebars";
const MySQLStore = require('express-mysql-session')(session);

const {database} = require('./keys');
const path = require('path')



/*app.get("/", (req, res) => {
  res.send("USE TYPESCRIPT BACKEND");
});*/



/*MIDDLEWARES */
/*app.use(morgan("start"));


/**GLOBAL VARIABLE*/


/*ROUTES*/

/*PUBLIC */

/*STAR */





async function main(){
  const app = new App();
  await app.listen();
  return app;
}

main();
