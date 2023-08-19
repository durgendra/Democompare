import tryCatch from "./utils/tryCatch.js";
import Summary from "../models/Summary.js";
// import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
// import { OpenAIEmbeddings } from "langchain/embeddings";
// import { PineconeStore } from "langchain/vectorstores";
// import { pinecone } from "./utils/pinecone-client.js";
// import { CustomPDFLoader } from "./utils/customPDFLoader.js";
// import { PDFLoader } from "langchain/document_loaders/fs/pdf";
// const { Storage } = require("@google-cloud/storage");

export const createSummary = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const newSummary = new Summary({ ...req.body, uid, uName, uPhoto });
  const response = await fetch(process.env.PYTHON_URL + "/api/v1/extract", {
    method: "POST",
    "Content-Type": "application/json",
    body: JSON.stringify({ papers: newSummary.papers }),
  });
  const data = await response.json();
  newSummary.papers = data.papers;
  await newSummary.save();
  res.status(201).json({ success: true, result: newSummary });
});

export const getSummaries = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const summaries = await Summary.find({ uid: uid }).sort({ _id: -1 });
  console.log("User summaries: " + summaries);
  res.status(200).json({ success: true, result: summaries });
});

export const createPineConeSummary = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const newSummary = new Summary({ ...req.body, uid, uName, uPhoto });
  await newSummary.save();
  console.log(newSummary);

  try {
    const rawDocs = [];
    /*load raw docs from the pdf file in the directory */
    for (let i = 0; i < newSummary.papers.length; i++) {
      console.log(newSummary.papers[i].pLink);
      // const loader = new CustomPDFLoader(newSummary.papers[i].pLink);
      const ans = newSummary.papers[i].pLink;
      // const ans = fLink.substring(0, fLink.indexOf(".pdf")) + ".pdf";
      console.log(ans);
      const loader = new PDFLoader(ans);
      const rawDocs0 = await loader.load();
      rawDocs = rawDocs.push(rawDocs0);
    }

    console.log(rawDocs);

    /* Split text into chunks */
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    const docs = await textSplitter.splitDocuments(rawDocs);
    console.log("split docs", docs);

    console.log("creating vector store...");
    /*create and store the embeddings in the vectorStore*/
    const embeddings = new OpenAIEmbeddings();
    const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME ?? "new4";
    const index = pinecone.Index(PINECONE_INDEX_NAME); //change to your own index name
    const PINECONE_NAME_SPACE = newSummary._id;
    //embed the PDF documents
    console.log(pinecone);
    console.log(index);
    console.log(
      PINECONE_NAME_SPACE
    ); /* Pinecone recommends a limit of 100 vectors per upsert request to avoid errors*/
    const chunkSize = 50;
    for (let i = 0; i < docs.length; i += chunkSize) {
      const chunk = docs.slice(i, i + chunkSize);
      console.log("chunk", i, chunk);
      await PineconeStore.fromDocuments(chunk, embeddings, {
        pineconeIndex: index,
        namespace: PINECONE_NAME_SPACE,
        textKey: "text",
      });
    }
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to ingest your data");
  }

  // const data = await response.json();
  // newSummary.papers = data.papers;
  console.log("Ingestion complete");
  // await newSummary.save();
  res.status(201).json({ success: true, result: newSummary });
});
