const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const posts = require("./routers/posts");

const URI =
  "mongodb+srv://letoan:letoan410@cluster0.m09swex.mongodb.net/blog?retryWrites=true&w=majority";

const app = express();
const Port = process.env.port || 5000;

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/posts", posts);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(Port, () => {
      console.log("Server is Running ong port: " + Port);
    });
    console.log("Mongoose Connect");
  })
  .catch((err) => {
    console.log("err", err);
  });
