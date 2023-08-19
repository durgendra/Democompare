// import { OpenAIEmbeddings } from "langchain/embeddings/openai";
// import { PineconeStore } from "langchain/vectorstores/pinecone";
// import makeChain from "./utils/makechain.js";
// import { pinecone } from "./utils/pinecone-client.js";
// import { PINECONE_INDEX_NAME, PINECONE_NAME_SPACE } from "@/config/pinecone";
import tryCatch from "./utils/tryCatch.js";
import ChatDoc from "../models/Chat.js";

const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME ?? "";

const PINECONE_NAME_SPACE = "pdftest";

export const createChat = tryCatch(async (req, res) => {
  // const { question, history } = req.body;
  // console.log("question", question);
  // //only accept post requests
  // if (req.method !== "POST") {
  //   res.status(405).json({ error: "Method not allowed" });
  //   return;
  // }
  // if (!question) {
  //   return res.status(400).json({ message: "No question in the request" });
  // }
  // // OpenAI recommends replacing newlines with spaces for best results
  // const sanitizedQuestion = question.trim().replaceAll("\n", " ");
  // try {
  //   const index = pinecone.Index(PINECONE_INDEX_NAME);
  //   /* create vectorstore*/
  //   const vectorStore = await PineconeStore.fromExistingIndex(
  //     new OpenAIEmbeddings({}),
  //     {
  //       pineconeIndex: index,
  //       textKey: "text",
  //       namespace: PINECONE_NAME_SPACE, //namespace comes from your config folder
  //     }
  //   );
  //   //create chain
  //   const chain = makeChain(vectorStore);
  //   //Ask a question using chat history
  //   const response = await chain.call({
  //     question: sanitizedQuestion,
  //     chat_history: history || [],
  //   });
  //   console.log("response", response);
  //   res.status(200).json(response);
  // } catch (error) {
  //   console.log("error", error);
  //   res.status(500).json({ error: error.message || "Something went wrong" });
  // }
});

export const addChatDoc = tryCatch(async (req, res) => {
  // const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  // const newChatDoc = new ChatDoc({ ...req.body, uid });
  // await newChatDoc.save();
  // console.log(newChatDoc);
  // await fetch(process.env.PYTHON_URL + "/api/v1/chat-loader", {
  //   method: "POST",
  //   "Content-Type": "application/json",
  //   body: JSON.stringify({
  //     papers: newChatDoc.papers,
  //     namespace: newChatDoc.id,
  //   }),
  // })
  //   .then((response) => response.json())
  //   .then(async (data) => {
  //     console.log(data);
  //     newChatDoc.isIngested = true;
  //     await newChatDoc.save();
  //     res.status(201).json({ success: true, result: newChatDoc });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     res
  //       .status(500)
  //       .json({ success: false, message: "Something went wrong, Try later" });
  //   });
});
