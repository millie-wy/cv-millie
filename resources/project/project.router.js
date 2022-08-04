import express from "express";
import {
  addProject,
  deleteProject,
  getProjects,
} from "./project.controller.js";
import { adminOnly } from "../../middleware.js";

export const projectRouter = express
  .Router()
  .get("/", getProjects)
  .post("/", adminOnly, addProject)
  .delete("/:id", adminOnly, deleteProject);
