const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const http = require("http").createServer(app);
app.use(bodyParser.json());


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "public")));
} else {
  const corsOptions = {
    origin: [
      "http://127.0.0.1:3000",
      "http://localhost:3000",
    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}


async function init() {
  const port = process.env.PORT || 3030;

  console.log(`Starting server + sequlize on port ${port}...`);

  http.listen(port);
}

init();
