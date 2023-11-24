/* eslint-disable */
const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");

/* const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger"); */

const app = express();

admin.initializeApp({
  credential: admin.credential.cert("./permissions.json"),
  databaseURL: "https://idk-lgm-default-rtdb.europe-west1.firebasedatabase.app",
});

app.get("/hello-world", (req, res) => {
  return res.status(200).json({message: "Hello World"});
});

app.use(require("./routes/pics.routes"));

exports.app = functions.https.onRequest(app);
