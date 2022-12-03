import express from "express";
import userRouter from "./routers/userRouter.js";
import docRouter from "./routers/docRouter.js";


const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.static("dist"));
app.use("/SummaryTable", express.static("dist"));
app.use("/api/users", userRouter);
app.use("/api/docs", docRouter);
app.use("/SummaryTable/api/users", userRouter);
app.use("/SummaryTable/api/docs", docRouter);

function startServe() {
  try {
    app.listen(PORT, () => {
      console.log("Server start on port", PORT);
    });
  } catch (e) {
    console.error(e);
  }
}

startServe();

