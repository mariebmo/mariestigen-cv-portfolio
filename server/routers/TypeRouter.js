import express from "express";
import {
  addType,
  deleteType,
  getType,
  getTypes,
  updateType,
} from "../database/models/typeController.js";

export const TypeRouter = express.Router();

TypeRouter.get("/", getTypes);
TypeRouter.get("/:id", getType);
TypeRouter.post("/", addType);
TypeRouter.put("/", updateType);
TypeRouter.delete("/", deleteType);
