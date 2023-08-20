const express = require("express");
const dbUri = require("./resource/conn");

// Models
const Blog = require("./models/blog");

// Import mongoose
const mongoose = require("mongoose");

// Create the express app
const app = express();

// Connect to your db (async, promise)
mongoose
  .connect(dbUri)
  .then((res) => {
    // Only listen for requests when connection is established
    console.log("Connection success");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err.message);
    console.log(
      "Please make sure your IP address is whitelisted on Mongo DB Atlas"
    );
  });

// EJS
app.set("view engine", "ejs");
app.set("views", "files");
app.use(express.urlencoded({ extended: true }));

// Logger
app.use((req, res, next) => {
  console.log("New request made");
  next();
});

// Mongo DB Routes
app.get("/blog/create", async (req, res) => {
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

app.get("/blog/all-blogs", async (req, res) => {
  try {
    const result = await Blog.find();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

app.get("/blog/single-blog", async (req, res) => {
  try {
    const result = await Blog.findById("64dd6d425648c15f3a3a4415");
    res.send(result);
  } catch (err) {
    console.log(er);
  }
});

// GET requests route handlers
app.get("/", (req, res) => {
  res.render("index", { heading: "My awesome title" });
});

app.get("/about", (req, res) => {
  res.render("about");
});

// Handler for create view
app.get("/account/create", (req, res) => {
  const paragObj = [
    { id: "1", content: "Lorem ipsum dolor sit amet consectetur" },
    { id: "2", content: "ipsum dolor consectetur" },
    { id: "3", content: "Lorem ipsum dolor sit amet " },
  ];
  res.render("create", { title: "My awesome self", paragObj });
});

app.get("/blog", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.render("blog", { blogs });
  } catch (err) {
    console.log(err);
  }
});

app.get("/blog/create-blog", (req, res) => {
  res.render("create-blog");
});

// Handling get requests with params
app.get("/blog/:id", async (req, res) => {
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
app.delete("/blog/:id", async (req, res) => {
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
app.post("/blog", async (req, res) => {
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

app.use((req, res) => {
  res.status(404).render("404");
});
