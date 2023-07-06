const { Schema, SchemaTypes } = require("../connect");
const mongoose = require("../connect");
const { SCHEMAS } = require("../../utils/config");

const blogSchema = new Schema(
  {
    title: { type: SchemaTypes.String, required: true, unique: true },
    description: { type: SchemaTypes.String, required: true, },
    image: { type: SchemaTypes.String, required: true },
  },
  { timestamps: true }
);
const blogModel = mongoose.model(SCHEMAS.BLOGS, blogSchema);
module.exports = blogModel;
