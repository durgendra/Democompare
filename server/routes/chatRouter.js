import { Router } from "express";

import { createChat, addChatDoc } from "../controllers/chat.js";
import auth from "../middleware/auth.js";

const chatRouter = Router();

chatRouter.post("/", auth, createChat);
chatRouter.post("/chat-doc", auth, addChatDoc);

export default chatRouter;
