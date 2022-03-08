const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KNHw6H2mlW7kBXs1H7B3qx9kUQc40Tl3DwZhLxyepnFycfTcL74H1q5IMhRNGcmcIhkG026D4hdhq8V8oM3JWlM008rEy5mgT"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("helio world"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // OK- CREATED
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
