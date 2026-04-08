const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const name = req.query.name;
  res.send("<html><body>Hello " + name + "</body></html>");
});

app.listen(3000);
