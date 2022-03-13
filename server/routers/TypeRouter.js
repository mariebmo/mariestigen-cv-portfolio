import express from "express";
import * as typeController from "../database/models/typeController.js";

export const TypeRouter = express.Router();

TypeRouter.get('/', typeController.getTypes);