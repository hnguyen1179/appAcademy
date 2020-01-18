const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("hey!"));
const db = require("./config/keys").mongoURI;

mongoose 
    .connect(db, { useNewURLParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
