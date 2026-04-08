app.get("/eval", (req, res) => {
  const code = req.query.code;
  Function(code)();
  res.send("ok");
});