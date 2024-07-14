import express from "express";
import { getLoginForm, loginUser, logoutUser } from "../controller/user.controller.js";
import unloggedMiddleware from '../middleware/unlogged.js';



const router = express.Router()

router.get("/logout", logoutUser)
router.get("/login", unloggedMiddleware, getLoginForm)
router.post("/login", loginUser)

router.all("*", (req, res) => {
    res.redirect('/login')
})


export default router;