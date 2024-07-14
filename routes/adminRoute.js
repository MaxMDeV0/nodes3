import express from "express";
import furnitureRouter from "./furnitureRoute.js";
import materialRouter from "./materialRoute.js"

const router = express.Router()

router.use('/furniture', furnitureRouter);
router.use('/material', materialRouter);

router.all("/admin/*", (req, res) => {
    res.redirect('/admin/furniture')
})
router.all("/admin", (req, res) => {
    res.redirect('/admin/furniture')
})

export default router;