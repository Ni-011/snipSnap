const express = require("express");

const app = express();
const port = 8000;

// all the endpoints related to route /URL
const URL = require("./routes/urlRoutes");
app.use("/URL", URL);

// function to connect to database
const { connectDb } = require("./Dbconnect");

connectDb("mongodb://localhost:27017/SnipSnap").then(() =>
  console.log("Connection to db established")
);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
