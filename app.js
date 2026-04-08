app.get("/eval", (req, res) => {
  const expr = req.query.expr;
  const result = eval(expr);
  res.send(String(result));
});