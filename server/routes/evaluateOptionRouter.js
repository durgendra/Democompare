import { Router } from "express";

import {
  getEvaluateOptions,
  evaluateOption,
} from "../controllers/evaluateOption.js";
import auth from "../middleware/auth.js";

const evaluateOptionRouter = Router();

evaluateOptionRouter.post("/", auth, evaluateOption);
evaluateOptionRouter.get("/", auth, getEvaluateOptions);

export default evaluateOptionRouter;
