import {Router} from "express";
const { adminIsLoggedIn } = require('../../lib/authentication');
const router = Router();


import {_get_} from "../../controllers/profile/profile.controllers";

router.route("/")
    .get(adminIsLoggedIn ,_get_);



export default router;