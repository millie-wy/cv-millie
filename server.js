import cookieSession from "cookie-session";
import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import { adminRouter } from "./resources/admin/index.js";
import { mediaRouter } from "./resources/media/index.js";
import { projectRouter } from "./resources/project/index.js";

const app = express();

// global middlewares
app.use(express.json());
app.use(cors());
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

const PORT = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB has been connected");
    app.listen(PORT, () => {
      console.log("Server is now running on port " + PORT);
    });
  })
  .catch((err) => console.log(err));
