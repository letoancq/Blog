const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      default: "Anonymous",
    },
    attachment: String,
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  //createAt - updateAt
  { timestamps: true }
);
module.exports = mongoose.model("post", post);