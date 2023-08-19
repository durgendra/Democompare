import express from "express";
import dontenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import evaluateOptionRouter from "./routes/evaluateOptionRouter.js";
import summaryRouter from "./routes/summaryRouter.js";
import optionRouter from "./routes/optionRouter.js";
import chatRouter from "./routes/chatRouter.js";
import mongoose from "mongoose";

dontenv.config();

const port = process.env.PORT || 8080;

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Authorization"
  );
  next();
});

app.use(express.json({ limit: "10mb" }));

app.use("/user", userRouter);
app.use("/evaluate", evaluateOptionRouter);
app.use("/summary", summaryRouter);
app.use("/chat", chatRouter);
app.use("/option", optionRouter);
app.get("/", (req, res) => res.json({ message: "Welcome to our API" }));
app.use((req, res) =>
  res.status(404).json({ success: false, message: "Not Found" })
);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT);

    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
