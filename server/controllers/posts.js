class post {
  getPost = (req, res) => {
    res.send("Router Success");
  };
}

module.exports = new post();
