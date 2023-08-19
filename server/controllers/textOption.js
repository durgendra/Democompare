import tryCatch from "./utils/tryCatch.js";
import TextOption from "../models/TextOption.js";

const DEFAULT_PARAMS = {
  model: "gpt-3.5-turbo-0613",
  // model: "gpt-4",
};
export const createOptions = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const newOption = new TextOption({ ...req.body, uid, uName, uPhoto });

  const schema = {
    type: "object",
    properties: { options: { type: "array", items: { type: "string" } } },
  };

  const params = {
    ...DEFAULT_PARAMS,
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant who can provide best options. I will provide a task with goal",
      },
      {
        role: "user",
        content:
          "For the provided task and goal, provide three best next options along with examples for these options. Task: " +
          String(newOption.optionTitle) +
          (newOption.optionGoal !== ""
            ? " Goal: " + String(newOption.optionGoal)
            : "") +
          " Goal: Task completion ",
      },
      // {role: "assistant", content: "The Los Angeles Dodgers won the World Series in 2020."},
      // {role: "user", content: "Where was it played?"}
    ],
    functions: [{ name: "set_option", parameters: schema }],
    function_call: { name: "set_option" },
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(process.env.OPENAI_API_KEY),
    },
    body: JSON.stringify(params),
  };

  await fetch("https://api.openai.com/v1/chat/completions", requestOptions)
    .then((response) => response.json())
    .then(async (data) => {
      const text = data.choices[0].message.function_call.arguments;
      const text2 = JSON.parse(text);
      newOption.resultAI = text2["options"];
      await newOption.save();
      res.status(201).json({ success: true, result: newOption });
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Something went wrong, Try later" });
    });
});

export const createMoreInfo = tryCatch(async (req, res) => {
  const { objectId, questionType, currentAsk } = req.body;
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  console.log(currentAsk);
  const params = {
    ...DEFAULT_PARAMS,
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant who can provide details accurately",
      },
      {
        role: "user",
        content: "Provide more details on: " + String(currentAsk),
      },
      // {role: "assistant", content: "The Los Angeles Dodgers won the World Series in 2020."},
      // {role: "user", content: "Where was it played?"}
    ],
  };

  console.log(params);
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(process.env.OPENAI_API_KEY),
    },
    body: JSON.stringify(params),
  };

  await fetch("https://api.openai.com/v1/chat/completions", requestOptions)
    .then((response) => response.json())
    .then(async (data) => {
      console.log(data);
      const text = data.choices[0].message.content;
      console.log(text);
      const result = text;
      res.status(201).json({ success: true, result: result });
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Something went wrong, Try later" });
    });
});

export const expandOption = tryCatch(async (req, res) => {
  const { objectId, questionType, currentAsk, optionIndex } = req.body;
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const textOption = await TextOption.findById(objectId);
  console.log(textOption);
  const schema = {
    type: "object",
    properties: { options: { type: "array", items: { type: "string" } } },
  };

  const params = {
    ...DEFAULT_PARAMS,
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant who can provide best options. I will provide a task with goal",
      },
      {
        role: "user",
        content:
          "For the provided task and goal, provide three best next options. Task: " +
          String(currentAsk) +
          " Goal: Task completion ",
      },
      // {role: "assistant", content: "The Los Angeles Dodgers won the World Series in 2020."},
      // {role: "user", content: "Where was it played?"}
    ],
    functions: [{ name: "set_option", parameters: schema }],
    function_call: { name: "set_option" },
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(process.env.OPENAI_API_KEY),
    },
    body: JSON.stringify(params),
  };

  await fetch("https://api.openai.com/v1/chat/completions", requestOptions)
    .then((response) => response.json())
    .then(async (data) => {
      const text = data.choices[0].message.function_call.arguments;
      const text2 = JSON.parse(text);
      // const position = 1;
      // const arr = textOption.history;
      // textOption.history = [
      //   ...arr.slice(0, position - 1),
      //   textOption.resultAI,
      //   ...arr.slice(position),
      // ];
      const historyArray = {
        textOptions: textOption.resultAI,
        clickedColumn: optionIndex,
      };

      textOption.history.push(historyArray);
      // const clickArrayLength = textOption.history.length;
      // const clickArray = {
      //   rowNumber: clickArrayLength,
      //   columnNumber: optionIndex,
      // };
      // textOption.clickHistory.push(clickArray);
      textOption.resultAI = text2["options"];
      await textOption.save();
      console.log(textOption);
      res.status(201).json({ success: true, result: textOption });
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Something went wrong, Try later" });
    });
});

export const historyExpand = tryCatch(async (req, res) => {
  const { objectId, questionType, currentAsk, indexGroup, optionIndex } =
    req.body;
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const textOption = await TextOption.findById(objectId);
  console.log(textOption);
  const schema = {
    type: "object",
    properties: { options: { type: "array", items: { type: "string" } } },
  };

  const params = {
    ...DEFAULT_PARAMS,
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant who can provide best options. I will provide a task with goal",
      },
      {
        role: "user",
        content:
          "For the provided task and goal, provide three best next options. Task: " +
          String(currentAsk) +
          " Goal: Task completion ",
      },
      // {role: "assistant", content: "The Los Angeles Dodgers won the World Series in 2020."},
      // {role: "user", content: "Where was it played?"}
    ],
    functions: [{ name: "set_option", parameters: schema }],
    function_call: { name: "set_option" },
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(process.env.OPENAI_API_KEY),
    },
    body: JSON.stringify(params),
  };

  await fetch("https://api.openai.com/v1/chat/completions", requestOptions)
    .then((response) => response.json())
    .then(async (data) => {
      const text = data.choices[0].message.function_call.arguments;
      const text2 = JSON.parse(text);
      // const arr = textOption.history;
      // textOption.history = [
      //   ...arr.slice(0, position - 1),
      //   textOption.resultAI,
      //   ...arr.slice(position),
      // ];
      const removed = textOption.history.splice(indexGroup + 1);

      // const removed2 = textOption.clickHistory.splice(indexGroup + 1);
      // const clickArrayLength = textOption.history.length;
      textOption.history[indexGroup].clickedColumn = optionIndex;
      textOption.resultAI = text2["options"];
      await textOption.save();
      console.log(textOption);
      res.status(201).json({ success: true, result: textOption });
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Something went wrong, Try later" });
    });
});

export const getOptions = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const faqs = await TextOption.find({ uid: uid }).sort({ _id: -1 });
  console.log("FAQS:  " + faqs);
  res.status(200).json({ success: true, result: faqs });
});

//to get image related data
