import express from "express";
import { Cv, educationExperience, workExperience } from "./cv.js";

export const CvApp = express.Router();

CvApp.get("/cv", (req, res) => {
  return res.json({ Cv });
});

CvApp.get("/cv/work", (req, res) => {
  console.log("WORK IS CALLED!")
  return res.json({ Cv });
});

CvApp.get("/cv/education", (req, res) => {
  console.log("EDU IS CALLED!")
  return res.json({ Cv });
});
