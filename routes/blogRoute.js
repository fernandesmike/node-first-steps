const express = require("express");

const {
  create_blog,
  all_blog,
  blog_details,
  delete_blog,
} = require("../controllers/blogController");
// Models
const Blog = require("../models/blog");

const router = express.Router();

router.get("/blog", all_blog);

router.get("/blog/create-blog", (req, res) => {
  res.render("create-blog");
});

router.get("/blog/:id", blog_details);

// DELETE requests route handler
router.delete("/blog/:id", delete_blog);

// POST requests route handlers
router.post("/blog", create_blog);

module.exports = router;
