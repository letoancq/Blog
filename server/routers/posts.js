const express = require("express");
const router = express.Router();

const post = require("../controllers/posts")

router.get("/", post.getPost );
router.get("/createPost", post.createPost );
router.get("/updatePost", post.updatePost );

module.exports = router;
