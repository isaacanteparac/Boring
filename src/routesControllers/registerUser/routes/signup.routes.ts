import { Router } from "express";
const router = Router();

//const passport = require("passport")

//DEPENDENCE:CONTROLLERS LOGIN
const {_get_, 
    _post_/*
    _update_,
_delete_*/} = require('../controllers/signup.controllers');




router.route("/")
    .get(_get_);

router.route("/")
    .post(_post_);
/*
router.route("/")
    .get(_update_);

router.route("/")
    .post(_delete_);*/


export default router;
