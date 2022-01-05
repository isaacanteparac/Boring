import { Router } from "express";
const router = Router();

//const passport = require("passport")

//DEPENDENCE:CONTROLLERS LOGIN
const {_get_,
    _post_,
    _put_likes,
    _delete_likes} = require('../../controllers/publication/publication.controllers');

router.route("/")
    .get(_get_);

router.route("/create")
    .post(_post_);

router.route("/likes/:id")
    .get(_put_likes);

router.route("/likes/delete:id")
    .delete(_delete_likes);


export default router;
