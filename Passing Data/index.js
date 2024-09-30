import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let sum = 0;

app.use(bodyParser.urlencoded({ extended: true }));

//write some code to render the h1 in the body
//Enter your name below 👇 (if there is no data)
//There are 7 letters in your name. (if we have data passed over)

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  sum = 0;
  //console.log(req.body);
  let firstName = req.body["fName"].length;
  let lastName = req.body["lName"].length;
  sum = firstName + lastName;
  //console.log(sum);
  res.render("index.ejs", { sum: sum });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
