import { Router } from "express";
const router = Router();



//DEPENDENCE:CONTROLLERS COMMENTS
const {_get_, 
    _post_,} = require('../controllers/chats.controllers');


router.route("/")
    .get(_get_);

router.route("/")
    .post(_post_);



export default router;
