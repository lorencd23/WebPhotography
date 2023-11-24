/* eslint-disable */
const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");

//Prueba
const cors = require('cors');

/* const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger"); */

const app = express();

admin.initializeApp({
  credential: admin.credential.cert("./permissions.json"),
  databaseURL: "https://idk-lgm-default-rtdb.europe-west1.firebasedatabase.app",
});

//Prueba
const corsOptions = {
  origin: ['https://idk-lgm.web.app', 'http://localhost:4200'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
};


app.get("/hello-world", (req, res) => {
  return res.status(200).json({message: "Hello World"});
});

//Prueba2
/* app.use(cors({ origin: true })); */

//Prueba
app.use(cors(corsOptions));

app.use(require("./routes/pics.routes"));

exports.app = functions.https.onRequest(app);
