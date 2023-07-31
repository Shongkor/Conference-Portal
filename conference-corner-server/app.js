const express = require("express");
const app = express();
const multer  = require('multer')
const cors = require("cors");
const bodyParser = require('body-parser');
const contactRoute = require('./Routes/v1/contact.route');
const authorRoute = require('./Routes/v1/authorSubmit');
const adminRoute = require('./Routes/v1/admin.route');
const signUpRoute = require('./Routes/v1/signUp.route');


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads',express.static('uploads'))



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`)
    
  }
})




const upload = multer({ storage })


app.use('/api/v1/contact', contactRoute);
app.use('/api/v1/submit',upload.single('fileURL'), authorRoute);
app.use('/api/v1/admin', adminRoute);
app.use('/api/v1/sign-up', signUpRoute);


app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


module.exports = app;
