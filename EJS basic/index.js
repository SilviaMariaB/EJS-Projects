import express from "express";
let app = express();
const port = 3000;
app.set("view engine", "ejs");

const d = new Date();
let day = d.getDay();

function dayOfWeek(req, res, next) {
  //console.log(req.body);
  if (day === 0 || day === 6) {
    // console.log("weekend");
    res.render("index", {
      day: "the weekend",
      phrase: "have fun",
    });
  } else {
    //console.log("weekday");
    res.render("index", {
      day: "a weekday",
      phrase: "work hard",
    });
  }
  next();
}

app.use(dayOfWeek);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
