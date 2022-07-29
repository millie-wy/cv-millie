import express from "express";
import mongoose from "mongoose";
import { mediaRouter } from "./resources/media/index.js";
import { projectRouter } from "./resources/project/index.js";
import { adminRouter } from "./resources/admin/index.js";
import cookieSession from "cookie-session";

const app = express();

// global middlewares
app.use(express.json());
app.use(
  cookieSession({
    secret: "49eFKEQh32E3grDJI",
    sameSite: "strict",
    httpOnly: false,
    secure: false,
  })
);

// routers
app.use("/api/admin", adminRouter);
app.use("/api/project", projectRouter);
app.use("/api/media", mediaRouter);

mongoose.connect(
  "mongodb+srv://millie:EKSxW2xFhesqUys@mycluster.kecdt.mongodb.net/cv-millie",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connection to database established.");
      app.listen(3001, () =>
        console.log("Server is running on http://localhost:3001/")
      );
    }
  }
);
