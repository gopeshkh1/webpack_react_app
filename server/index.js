const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const user = require("./routes/user");

app.get("/test", (req, res) => {
  res.end("hello from backend");
});

app.use("/api/user", user);

app.use(express.static("client/dist"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../", "client", "dist", "index.html"));
});

const port = process.env.PORT || 8000;
app.listen(port, (err, res) => {
  if (err) {
    console.log("some error occured while starting the server");
  } else {
    console.log(`server started at port:${port}`);
  }
});
