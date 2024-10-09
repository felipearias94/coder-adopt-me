import { Router } from "express";
import { AdoptionsController } from "../controllers/adoption.controller.js";

const adoptionsController = new AdoptionsController();
const router = Router();

router.get("/", adoptionsController.getAllAdoptions);
router.get("/:aid", adoptionsController.getAdoption);
router.post("/:uid/:pid", adoptionsController.createAdoption);

export default router;
