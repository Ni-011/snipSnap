// import mongoose
// create a schema for url using new mongoose.schema function
// it must constain a shortId (new url), redirect url, visited (when link was opened)
// create URL model using this scema
// export this URL model

const mongoose = require("mongoose");

urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  redirectUrl: {
    type: String,
    required: true,
  },
  visited: [
    {
      timestamp: {
        type: number,
      },
    },
  ],
});

const URL = mongoose.model("url", urlSchema);
module.exports = URL;
