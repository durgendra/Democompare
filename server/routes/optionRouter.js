import { Router } from "express";

import {
  getOptions,
  createOptions,
  createMoreInfo,
  expandOption,
  historyExpand,
} from "../controllers/textOption.js";
import auth from "../middleware/auth.js";

const optionRouter = Router();

optionRouter.post("/", auth, createOptions);
optionRouter.get("/", auth, getOptions);
optionRouter.post("/more", auth, createMoreInfo);
optionRouter.post("/expand", auth, expandOption);
optionRouter.post("/history-more", auth, historyExpand);

export default optionRouter;
