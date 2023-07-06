const { SUCCESS, SERVER_ERROR, NOT_FOUND } =
  require("../utils/config").STATUS_CODES;
const messageBundle = require("../locales/en");
const blogOperations = require("../db/services/blog_crud");
const blogController = {
  async getBlogByid(request, response) {
    const blogId = request.query.id;
    try {
      const doc = await blogOperations.findOne(blogId);
      if (doc) {
        response
          .status(SUCCESS)
          .json({
            message: messageBundle["findOne.success"],
            doc: doc,
          });
      } else {
        response
          .status(NOT_FOUND)
          .json({ message: messageBundle["findOne.fail"] });
      }
   
    } catch (err) {
      response
        .status(SERVER_ERROR)
        .json({ message: messageBundle["uncaught.server_error"] });
    }
  },
  async getAllBlogs(request,response){
    try {
      const doc = await blogOperations.findAll();
      if (doc) {
        response
          .status(SUCCESS)
          .json({
            message: messageBundle["findAll.success"],
            doc: doc,
          });
      } else {
        response
          .status(NOT_FOUND)
          .json({ message: messageBundle["findAll.fail"] });
      }
   
    } catch (err) {
      response
        .status(SERVER_ERROR)
        .json({ message: messageBundle["uncaught.server_error"] });
    }
  },
  createBlog(request, response) {
    const promise = blogOperations.create(request.body);
    promise
      .then((doc) => {
        response
          .status(SUCCESS)
          .json({ message: messageBundle["createBlog.success"], doc: doc });
      })
      .catch((err) => {
        response
          .status(SERVER_ERROR)
          .json({ message: messageBundle["createBlog.fail"] });
      });
  },
  updateBlog(request, response){
    const promise = blogOperations.updateOne(request.body);
    promise
      .then((doc) => {
        response
          .status(SUCCESS)
          .json({ message: messageBundle["updateBlog.success"], doc: doc });
      })
      .catch((err) => {
        response
          .status(SERVER_ERROR)
          .json({ message: messageBundle["updateBlog.fail"] });
      });
  },
  async deleteBlogById(request, response) {
    const blogId = request.query.id;
    try {
      const doc = await blogOperations.deleteOne(blogId);
      if (doc) {
        response
          .status(SUCCESS)
          .json({
            message: messageBundle["deleteBlog.success"],
            doc: doc
          });
      } else {
        response
          .status(NOT_FOUND)
          .json({ message: messageBundle["deleteBlog.fail"] });
      }
    } catch (err) {
      console.log(err);
      response
        .status(SERVER_ERROR)
        .json({ message: messageBundle["uncaught.server_error"] });
    }
  },
  
};

module.exports = blogController;
