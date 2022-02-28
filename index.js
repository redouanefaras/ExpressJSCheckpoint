const events=require('events')
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`the server is running on ${port}`);});
app.use("/", (req, res, next) => {
  let day = new Date().getDay();
  let hour = new Date().getHours();

  if (1 < day && day < 6 && 9 < hour && hour < 18) {
    next();
  } else {
    res.send(
      "<h1> The web application is only available during working hours (Monday to Friday,  from 9 to 17) </h1>"
    );
  }
});

app.get("/Home", (req, res) =>{res.sendFile(__dirname + "/Public/Home.html")}); 

app.get("/Services", (req, res) =>{res.sendFile(__dirname + "/Public/Services.html")});

app.get("/Contact", (req, res) =>{ res.sendFile(__dirname + "/Public/Contact.html")});
