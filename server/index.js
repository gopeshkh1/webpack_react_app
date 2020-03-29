const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const user = require("./routes/user");

app.get("/", (req, res) => {
  res.end("hello from backend");
});

app.use("/api/user", user);

const port = process.env.PORT || 8000;
app.listen(port, (err, res) => {
  if (err) {
    console.log("some error occured while starting the server");
  } else {
    console.log(`server started at port:${port}`);
  }
});
