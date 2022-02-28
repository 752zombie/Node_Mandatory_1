const express = require("express");
const app = express();
app.use(express.static("public"));
const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();

const node = fs.readFileSync("./public/pages/node/node.html").toString();
const nodePage = nav.replace("%%DOCUMENT_TITLE%%", "Node.js") + node + footer;

app.get("/node", (req, res) => {
    res.send(nodePage);
});


app.listen(8080, () => console.log("Server is running on port", 8080));