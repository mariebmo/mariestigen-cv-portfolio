import express from "express";
import { CvRouter } from "./routers/CvRouter.js";
import { TypeRouter} from "./routers/TypeRouter.js";
import * as path from "path";

const app = express();

app.use("/api/cv", CvRouter);
app.use("/api/type", TypeRouter);

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
