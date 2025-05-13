const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/', { useNewUrlParser: true, useUnifiedTopology: true }); //TODO: edit db url

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  const passSchema = new mongoose.Schema({
    username: String,
    password: String,
  });
