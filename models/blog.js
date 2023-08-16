const mongoose = require("mongoose");
// Create a schema object
const Schema = mongoose.Schema;

// Define the schema or structure using Object
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Now create a model that wraps the schema
// 1. The name on the collection
// 2. The schema to wrap
// Capital letter naming convention
const Blog = mongoose.model("Blog", blogSchema);

// Then export it
module.exports = Blog;
