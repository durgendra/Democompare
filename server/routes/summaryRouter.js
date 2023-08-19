import { Router } from "express";

import {
  getSummaries,
  createSummary,
  createPineConeSummary,
} from "../controllers/summary.js";
import auth from "../middleware/auth.js";

const summaryRouter = Router();

summaryRouter.post("/", auth, createSummary);
summaryRouter.post("/pinecone", auth, createPineConeSummary);
summaryRouter.get("/", auth, getSummaries);

export default summaryRouter;
