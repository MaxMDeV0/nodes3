import express from "express";
import { crudFurniture, getFurnitureForm, addFurniture , getFurnitureList } from "../controller/furniture.controller.js";

const router = express.Router()

router.get("/", getFurnitureList)
router.get("/new", getFurnitureForm)
router.post("/new", addFurniture)
router.get("/:crud/:id", getFurnitureForm)
router.post("/:crud/:id", crudFurniture)


export default router;