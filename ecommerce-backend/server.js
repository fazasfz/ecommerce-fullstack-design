const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Dummy route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/*What Goes in server.js?
server.js is typically used to:

Set up the Express server.

Connect to the database (config/db.js).

Import and use API routes.

Handle middleware like express.json() and cors(). */