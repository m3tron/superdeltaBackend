const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", async (req, res) => {
  try {
    const URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.GOOGLE_PLACEID}&fields=reviews&key=${process.env.GOOGLE_APIKEY}`;

    const { data } = await axios.get(URL);
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
