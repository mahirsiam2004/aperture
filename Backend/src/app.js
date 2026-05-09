const express = require("express");
const cors = require("cors");
const bookRoutes = require("./routes/Bookroutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/books", bookRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Bookstore API is running" });
});

module.exports = app;
