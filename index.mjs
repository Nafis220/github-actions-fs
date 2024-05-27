import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Github Actions");
});
app.listen(3000, () => {
  console.log("Listening in 3000");
});
