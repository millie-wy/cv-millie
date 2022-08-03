import express from "express";
import multer from "multer";
import { addMedia, deleteMedia, getMedia } from "./media.controller.js";
import { adminOnly } from "../../middleware.js";

const upload = multer();

export const mediaRouter = express
  .Router()
  .get("/:id", getMedia)
  .post("/", adminOnly, upload.single("media"), addMedia)
  .delete("/:id", adminOnly, deleteMedia);
