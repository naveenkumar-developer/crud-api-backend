const express = require("express");
const app = express();
const router = require('./routes/usersRoutes')
//middleWare
app.use(express.json());

//routes
app.use('/api/users', router)

// mongoose
const mongoose = require("mongoose");

// connect mongoDB database with mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/users")
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

//starter code
app.get("/", (req, res) => {
  res.send("hello from node");
});


//listen the localhost port number
app.listen(3000, () => {
  console.log("server is started");
});
