const { urlencoded } = require('express');
const express = require('express');
const app = express();

app.listen(5000, (err) => {
  if (err) console.log(err);
  console.log('Server is running on port 5000');
});

app.get('/', (req, res) => {
  res.send('Hello World');
});


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test',
  { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) console.log(err);
    console.log('Connected to database');
  });

const unicornsSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  loves: [String],
  weight: Number,
  gender: {
    type: String,
    enum: ['m', 'f']
  },
  vampires: Number,
  vaccinated: Boolean
});

const unicornModel = mongoose.model('unicorns', unicornsSchema);

app.get('/unicorns', (req, res) => {
  unicornModel.find({}, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.use(express.urlencoded());
app.use(express.json());
app.post('/getUnicornByNameRoute', (req, res) => {
  console.log(req.body);
  unicornModel.find({ name: req.body.unicornNameInHTTPBody }, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});


app.use(express.static('./public'));

