const express = require("express");
const router = express.Router();

const { uploadResume } = require("../controllers/uploadController");

router.post("/upload-resume", uploadResume);

module.exports = router;