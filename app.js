const express = require("express");
const app = express();
app.use(express.static("public"));
const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();

const frontPage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const frontPagePage = nav.replace("%%DOCUMENT_TITLE%%", "Home") + frontPage + footer; 

const node = fs.readFileSync("./public/pages/node/node.html").toString();
const nodePage = nav.replace("%%DOCUMENT_TITLE%%", "Node.js") + node + footer;

const variables = fs.readFileSync("./public/pages/variables/variables.html").toString();
const variablesPage = nav.replace("%%DOCUMENT_TITLE%%", "Variables in JavaScript") + variables + footer;

app.get("/node", (req, res) => {
    res.send(nodePage);
});

app.get("/variables", (req, res) => {
    res.send(variablesPage);
});

app.get("/", (req, res) => {
    res.send(frontPagePage);
})


app.listen(8080, () => console.log("Server is running on port", 8080));