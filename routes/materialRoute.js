import express from "express";
import { getMaterial } from "../controller/material.controller.js";

const router = express.Router()


router.get("/:libelle", getMaterial)


export default router;