const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);
app.get("/", (req, res) => {
  res.json({
    name: "Bangledesh",
    description: "land of emotions",
  });
});
app.get("/about", (req, res) => {
  res.json({
    name: "england",
    description: "land of fuckinng",
  });
});

app.listen(PORT, () => {
  console.log(`your app is running at http://localhost:${PORT}`);
});
