import express from "express";
import { Cv, EducationalExperience, WorkExperience } from "../cv.js";
import bodyParser from "body-parser";
import * as TypeRouter from "./TypeRouter.js";

export const CvRouter = express.Router();

CvRouter.use(bodyParser);

CvRouter.get("/", (req, res) => {
    res.json({ experience: Cv });
});

CvRouter.get("/work", (req, res) => {
    res.json({ experience: WorkExperience });
});

CvRouter.get("/education", (req, res) => {
    res.json({ experience: EducationalExperience });
});

