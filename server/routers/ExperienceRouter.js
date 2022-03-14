import express from "express";
import {
  addExperience,
  deleteExperience, getExperience,
  getExperiences, getExperiencesByType,
  updateExperience,
} from "../database/models/experienceController.js";

export const ExperienceRouter = express.Router();

ExperienceRouter.get("/", getExperiences);
ExperienceRouter.get("/:typeId", getExperiencesByType);
ExperienceRouter.get("/:id", getExperience);
ExperienceRouter.post("/", addExperience);
ExperienceRouter.put("/", updateExperience);
ExperienceRouter.delete("/", deleteExperience);
