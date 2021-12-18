import {App} from "./app";


import session  from "express-session";
import flash  from "connect-flash";
import { engine } from "express-handlebars";
const MySQLStore = require('express-mysql-session')(session);


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
