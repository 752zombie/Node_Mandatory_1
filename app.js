const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

app.listen(8080, () => console.log("Server is running on port", 8080));