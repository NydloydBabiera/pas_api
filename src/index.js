const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// ning ari na part iperform niya ang ara sa routes na folder didto ni masulod
app.use("/insertNewEmp", require("./routes"));

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

module.exports = app;
