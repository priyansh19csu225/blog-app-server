
const BlogModel = require("../models/blog");
module.exports = {
    async findOne(blogId){
        const doc = await BlogModel.findOne({ "_id" : blogId });
        if(doc) {
          return doc;
        }
        else{
          return null;
        }
      },
    async findAll(){
        const docs = await BlogModel.find();
        if(docs){
            return docs;
        }
        else{
            return null;
        }
    },
    create(blogObject) {
        const promise = BlogModel.create(blogObject);
        return promise;
    },
    updateOne(blogObject){
        const promise = BlogModel.updateOne({ "_id" : blogObject.id }, blogObject);
        return promise;
    },
    async deleteOne(blogId){
        const doc = await BlogModel.deleteOne({ "_id" : blogId });
        return doc;
    },

};
