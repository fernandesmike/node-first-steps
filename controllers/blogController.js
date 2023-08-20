const Blog = require("../models/blog");

const create_blog = async (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blog");
    })
    .catch((err) => {
      console.log(err);
    });
};

const all_blog = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.render("blog", { blogs });
  } catch (err) {
    console.log(err);
  }
};

const blog_details = async (req, res) => {
  // Get the ID on the URI
  const id = req.params.id;
  try {
    // Retrieve it and render to the page
    const retrievedBlog = await Blog.findById(id);
    res.render("details", { blog: retrievedBlog, title: "Blog details" });
  } catch (err) {
    res
      .status(404)
      .render("404", { message: "Blog has been removed or does not exist!" });
  }
};

const delete_blog = async (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blog" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { create_blog, all_blog, blog_details, delete_blog };
