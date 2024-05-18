const express = require('express');
const { default: mongoose } = require('mongoose');
const accountRoutes = require('./routes/accountRoutes')
const userInfoRoutes = require('./routes/userInfoRoutes')
// const { mongoURI } = require("dotenv").config();
;


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/db_rinrin_karmila_betest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });



app.use('/account', accountRoutes);
app.use('/user', userInfoRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("server is running on http://localhost:8080");
});