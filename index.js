const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json()); // req.body
app.use(express.urlencoded({ extended: true }));

// mongoose connection'

mongoose
  .connect("mongodb://localhost/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("conneted to mogodb.."))
  .catch((err) => console.log(err.message));

// routes setup
app.get("/", (req, res, next) => {
  res.send("test");
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listing on port ${port}`));
