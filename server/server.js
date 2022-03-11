import express from "express";
import { CvApp } from "./CvApp.js";
import * as path from "path";

const app = express();

app.use("/api", CvApp);
app.use(express.static("../client/dist"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 8293, () => {
  console.info(`Server running on http://localhost:${server.address().port}`);
});
