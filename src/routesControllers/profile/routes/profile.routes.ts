import {Router} from "express";

const router = Router();


import {_get_} from "../controllers/profile.controllers";

router.route("/")
    .get(_get_);



export default router;