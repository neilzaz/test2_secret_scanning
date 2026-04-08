const express = require("express");
const escape = require("escape-html");
const app = express();

app.get("/xss", (req, res) => {
  const q = req.query.q;
  res.send("<html><body>" + escape(q || "") + "</body></html>");
});

app.listen(3000);