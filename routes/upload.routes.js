const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });
router.post("/", upload.single("image"), async (req, res) => {
   const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ url: fileUrl });
});
module.exports = router