const PostModel = require("../models/postModel");

class postControllers {
  getPost = async (req, res) => {
    try {
      const posts = await PostModel.find();
      console.log("post", posts);
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  createPost = async (req, res) => {
    try {
      const newPost = req.body;
      const post = new postModel(newPost);

      await post.save();

      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  updatePost = async (req, res) => {
    try {
      const updatePost = req.body;
      const post = await PostModel.findOneAndUpdate(
        { _id: updatePost._id },
        updatePost,
        { new: true }
      );

      await post.save();

      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error });
    }
  };
}

module.exports = new postControllers();
