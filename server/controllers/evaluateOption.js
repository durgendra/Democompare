import tryCatch from "./utils/tryCatch.js";
import EvaluateOption from "../models/EvaluateOption.js";

const DEFAULT_PARAMS = {
  model: "gpt-3.5-turbo-0613",
  // model: "gpt-4",
};

export const evaluateOption = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const newEvaluateOption = new EvaluateOption({
    ...req.body,
    uid,
    uName,
    uPhoto,
  });

  const schema = {
    type: "object",
    properties: {
      evaluationCriteria: {
        type: "string",
        description:
          "Provide at least 3 criteria to evaluate these options. Describe each of these criteria",
      },
      recommendedOption: {
        type: "string",
        description: "Provide the recommended option out of user given options",
      },
      recommendedReasonOption: {
        type: "string",
        description: "Provide reason for selecting the recommended option",
      },
      options: {
        type: "string",
        description:
          "Provide couple of additional options other than user's options",
      },
    },
  };
  const params = {
    ...DEFAULT_PARAMS,
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant who can evaluate options for a decision and provide the recommendation option. I will provide a text paragraph outlining the situation and few options.",
      },
      {
        role: "user",
        content:
          "For the provided situation and options, provide list of criteria, few more options similar to that of provided options and the recommended option. Situation: " +
          String(newEvaluateOption.paragraph) +
          (newEvaluateOption.userOptions[0] !== ""
            ? " Option 1: " + String(newEvaluateOption.userOptions[0])
            : "") +
          (newEvaluateOption.userOptions[1] !== ""
            ? ", Option 2: " + String(newEvaluateOption.userOptions[1])
            : "") +
          (newEvaluateOption.userOptions[2] !== ""
            ? ", Option 3: " + String(newEvaluateOption.userOptions[2])
            : ""),
      },
    ],
    functions: [{ name: "set_option", parameters: schema }],
    function_call: { name: "set_option" },
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
      const text = data.choices[0].message.function_call.arguments;
      const text2 = JSON.parse(text);
      console.log(text);
      const result =
        "Evaluation Criteria in this situation: " +
        "\r\n" +
        text2["evaluationCriteria"] +
        "\r\n" +
        "\r\n" +
        "Recommended Option: " +
        "\r\n" +
        text2["recommendedOption"] +
        "\r\n" +
        "\r\n" +
        "Reason for recommended options " +
        "\r\n" +
        text2["recommendedReasonOption"] +
        "\r\n" +
        "\r\n" +
        "Few other options to consider: " +
        "\r\n" +
        text2["options"];
      console.log(result);
      newEvaluateOption.evaluateAI = result;
      await newEvaluateOption.save();
      res.status(201).json({ success: true, result: newEvaluateOption });
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Something went wrong, Try later" });
    });
});

export const getEvaluateOptions = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const EvaluateOptions = await EvaluateOption.find({ uid: uid }).sort({
    _id: -1,
  });
  console.log("EvaluateOptionS:  " + EvaluateOptions);
  res.status(200).json({ success: true, result: EvaluateOptions });
});

export const getResponse = tryCatch(async (req, res) => {
  const { body } = req;
  const { query } = body;
  const response = await openAi.createCompletion({
    model: "text-davinci-003",
    prompt: query,
    max_tokens: 1000,
    temperature: 0,
  });

  res.json({
    data: response.data.choices[0].text,
  });
});

//to get image related data
