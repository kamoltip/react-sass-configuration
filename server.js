const express = require ("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/",(req, res) => {
  res.json({msg:"ok"});
});

app.listen(PORT,() => {
  console.log("Server is listening at port", PORT);
});
