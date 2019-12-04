const result = require("dotenv").config({ path: "config.env" });
const express = require("express");
const session = require("express-session");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const path = require("path");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const app = (module.exports = express());

app.use(helmet());
app.use(cookieParser());

var sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    secure: false
  },
  resave: false,
  saveUninitialized: true
};

if (app.get("env") === "production") {
  app.set("trust proxy", 1);
  sess.cookie.secure = true;
}

app.use(session(sess));

if (result.error) throw result.error;
require(__dirname + "/orders.js");
require(__dirname + "/admin.js");

app.use(express.json());

app.get("/product-info/:id", function(req, res) {
  stripe.skus.list({ product: req.params.id }, function(err, product) {
    err ? res.status(500).send(err) : res.json(product);
  });
});

app.get("/product-info/", function(req, res) {
  stripe.skus.list(function(err, skus) {
    err ? res.status(500).send(err) : res.json(skus.data);
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
  });
}

const PORT = 3001;

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}!`);
});
