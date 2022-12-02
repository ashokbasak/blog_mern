const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

require("./database/connection");
const dotenv = require("dotenv");
const authRoute = require("../server/routes/auth");
const postRoute = require("../server/routes/posts");
const multer = require("multer");


dotenv.config();
app.use(express.json());



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "landscape.jpg");
  },
});
const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
  console.log(req.file);
});
app.use(authRoute);
app.use(postRoute);

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
