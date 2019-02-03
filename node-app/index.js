const express = require("express");

const app = express();

const port = 8080 || process.env.port;

app.get("/", (req, res) => {
    res.send("Hello there!")
});

app.listen(port, () => {
    console.log(`App listening on ${port}`);
});