const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello depuis Vercel !");
});

module.exports = app; // requis par Vercel
