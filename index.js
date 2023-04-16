const express = require("express");
const app = express();
const port = 5000;

const data = [
  {
    id: "1",
    name: "Nishant",
    class: "10",
    Rollno: "11912017",
    Sub: "Maths",
  },
  {
    id: "2",
    name: "Nishant",
    class: "10",
    Rollno: "11912017",
    Sub: "Maths",
  },
  {
    id: "3",
    name: "Nishant",
    class: "10",
    Rollno: "11912017",
    Sub: "Maths",
  },
  {
    id: "4",
    name: "Nishant",
    class: "10",
    Rollno: "11912017",
    Sub: "Maths",
  },
];

app.get("/", (req, res) => {
  const val = req.query;
  console.log(val.id);
  let final_data = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == val.id) {
      final_data = data[i];
      break;
    }
  }
  if (final_data == "") {
    final_data = "NOT FOUND ERROR";
  }

  res.status(200).send({
    message: "Sucess",
    data: data,
  });
});

app.post("/apple", (req, res) => {
  res.status(200).send({
    message: "ok",
  });
});

app.listen(port, (req, res) => {
  console.log(`Listing to port ${port}`);
});
