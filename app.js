const express = require("express");
const app = express();
const port = 2001;

app.get("/", (req, res) => {
  res.status(200).send("hello from server");
});

app.listen(port, () => {
  console.log(`Hello from port: ${port}`);
});
