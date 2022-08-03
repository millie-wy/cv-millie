import cookieSession from "cookie-session";
import express from "express";
import mongoose from "mongoose";
import { adminRouter } from "./resources/admin/index.js";
import { mediaRouter } from "./resources/media/index.js";
import { projectRouter } from "./resources/project/index.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

const app = express();
app.use(cors);

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

// global middlewares
// app.use(express.json());
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

const PORT = process.env.PORT || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server is now running on port " + PORT);
});
