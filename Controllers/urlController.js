const { nanoid } = require("nanoid");
const URL = require("../models/urlModel");

async function GenerateShortUrl(req, res) {
  // check if the request body has a url or not
  // create a new id with nanoid()
  // add data into URL model
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "url is cannot be found" });
  }

  const newUrlId = nanoid(7);
  await URL.create({
    shortId: newUrlId,
    redirectUrl: body.url,
    visited: [],
  });

  return res.json({ message: `${newUrlId} was created` });
}

module.exports = {
  GenerateShortUrl,
};
