const express = require("express");
const escape = require("escape-html");
const app = express();

app.get("/", (req, res) => {
  const name = req.query.name;
  res.send("<html><body>Hello " + escape(name) + "</body></html>");
});

app.listen(3000);
