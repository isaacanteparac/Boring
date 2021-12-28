import { Router } from "express";
const router = Router();

//const passport = require("passport")

//DEPENDENCE:CONTROLLERS LOGIN
const {_get_,
    _post_} = require('../controllers/publication.controllers');

router.route("/")
    .get(_get_);

router.route("/create")
    .post(_post_);



export default router;
