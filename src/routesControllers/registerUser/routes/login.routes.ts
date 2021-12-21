import { Router } from "express";
const router = Router();

//const passport = require("passport")

//DEPENDENCE:CONTROLLERS LOGIN
const {_getInformation_,
    _get_, 
    _post_,} = require('../controllers/login.controllers');


router.route("/")
    .get(_getInformation_);

router.route("/login")
    .get(_get_);

router.route("/login")
    .post(_post_);




export default router;
