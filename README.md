# Demo Compare

React and Express comparison demo built from the same client/server layout as Best Next Options.

## About

This repo appears to be a demo or comparison fork of the option-evaluation app. The architecture centers on a React frontend and an Express backend that support option evaluation, summaries, chat flows, and user interaction.

## Key Features

- Decision-support UI
- Option evaluation and summaries
- Chat and user endpoints
- Firebase and MongoDB integration

## Architecture

- `client-front/` is the CRA frontend
- `server/` is the Express API
- The server registers option, summary, chat, and user routers

## Tech Stack

- React 18
- Create React App
- Node.js + Express
- MongoDB + Mongoose
- Firebase
- OpenAI / LangChain

## Prerequisites

- Node.js
- MongoDB

## Installation

```bash
cd server && npm install
cd ../client-front && npm install
```

## Configuration

- Server: `PORT`, `CLIENT_URL`, `MONGO_CONNECT`
- Client: `REACT_APP_SERVER_URL`, `REACT_APP_API_KEY`, `REACT_APP_AUTH_DOMAIN`, `REACT_APP_PROJECT_ID`, `REACT_APP_STORAGE_BUCKET`, `REACT_APP_MESSAGING_SENDER`, `REACT_APP_APP_ID`, `REACT_APP_GOOGLE_CLIENT_ID`

## How to Run

```bash
cd server
npm start

cd ../client-front
npm start
```

## Example Usage

- Run the backend and open the frontend in a browser
- Explore the evaluation, chat, and summary screens

## Project Structure

- `client-front/src/main/` - frontend feature code
- `client-front/src/views/` - pages
- `server/routes/` - API routes
- `server/controllers/` - request handlers

## Current Status

Functional demo, likely intended as a comparison fork rather than a distinct product.

## Limitations

- No root env example yet
- No tests were run here
- No explicit license at the repo root

## License

No explicit license file was found at the repository root.
