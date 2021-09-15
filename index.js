const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", async (req, res) => {
  const URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.GOOGLE_PLACEID}&fields=reviews&key=${process.env.GOOGLE_APIKEY}`;

  const { data } = await axios.get(URL);
  res.send(data);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
