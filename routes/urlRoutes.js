const express = require("express");
const router = express.Router();
const { GenerateShortUrl } = require("../Controllers/urlController");

router.post("/", GenerateShortUrl);

module.exports = router;
