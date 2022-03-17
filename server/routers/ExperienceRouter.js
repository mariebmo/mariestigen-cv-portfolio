import express from "express";
import {
  addExperience,
  deleteExperience, getExperience,
  getExperiences, getExperiencesByType,
  updateExperience,
} from "../database/controllers/experienceController.js";

export const ExperienceRouter = express.Router();

ExperienceRouter.get("/", getExperiences);
ExperienceRouter.get("/type/:typeId", getExperiencesByType);
ExperienceRouter.get("/id/?id=:id", getExperience);
ExperienceRouter.post("/", addExperience);
ExperienceRouter.put("/", updateExperience);
ExperienceRouter.delete("/", deleteExperience);
