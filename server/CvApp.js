import express from "express";
import { Cv, EducationalExperience, WorkExperience } from "./cv.js";

export const CvApp = express.Router();

CvApp.get("/cv", (req, res) => {
  res.json({ Cv });
});

CvApp.get("/cv/work", (req, res) => {
  res.json({ WorkExperience });
});

CvApp.get("/cv/education", (req, res) => {
  res.json({ EducationalExperience });
});
