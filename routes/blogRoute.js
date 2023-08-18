const express = require("express");

// Models
const Blog = require("../models/blog");

const router = express.Router();

router.get("/blog/create", async (req, res) => {
  // Purely OOP, create an instance of the schema and use its model to perform db operations
  const blog = new Blog({
    title: "I did not know this yesterday",
    snippet: "Be thankful to yourself",
    body: "I am learning once again slowly and surely",
  });

  // Blog obj returns a model for that schema
  try {
    const result = await blog.save();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

router.get("/blog/all-blogs", async (req, res) => {
  try {
    const result = await Blog.find();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

router.get("/blog/single-blog", async (req, res) => {
  try {
    const result = await Blog.findById("64dd6d425648c15f3a3a4415");
    res.send(result);
  } catch (err) {
    console.log(er);
  }
});

router.get("/blog", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.render("blog", { blogs });
  } catch (err) {
    console.log(err);
  }
});

router.get("/blog/create-blog", (req, res) => {
  res.render("create-blog");
});

// Handling get requests with params
router.get("/blog/:id", async (req, res) => {
  // Get the ID on the URI
  const id = req.params.id;
  try {
    // Retrieve it and render to the page
    const retrievedBlog = await Blog.findById(id);
    res.render("details", { blog: retrievedBlog, title: "Blog details" });
  } catch (err) {
    console.log(err);
  }
});

// DELETE requests route handler
router.delete("/blog/:id", async (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blog" });
    })
    .catch((err) => {
      console.log(err);
    });
});

// POST requests route handlers
router.post("/blog", async (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blog");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
