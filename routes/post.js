
const express = require("express");
const router = express.Router();
const post = require("../controller/post");
const all = require("../controller/all");
const id = require("../controller/id");

router.post("/", post);

router.get("/all", all);

router.post("/id/:id", id);


module.exports = router;