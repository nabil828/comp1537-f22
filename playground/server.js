const express = require('express');
const app = express();

app.listen(process.env.PORT || 5000, (err) => {
  if (err) console.log();
  console.log('Server is running on port 5000');
});


app.get('/', (req, res) => {
  res.send('Hello World');
});

const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb+srv://user1:Q4OsIBI0SVaTonQt@cluster0.lbm8g.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('strictQuery', true);

const unicornsSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  loves: [String],
  weight: Number,
  gender: {
    type: String,
    enum: ['m', 'f']
  },
  vampire: Number,
  vaccinated: Boolean
});

const unicornModel = mongoose.model('unicorns', unicornsSchema);


app.get('/unicorns', (req, res) => {
  unicornModel.find({ gender: "m" }, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

app.use(express.urlencoded());
app.use(express.json());
app.post('/filteredUnicorns', (req, res) => {
  console.log(req.body)
  unicornModel.find({ name: req.body.unicornNameFromHTTPbody }, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});


app.post('/filterUnicornByGender', (req, res) => {
  console.log(req.body)
  unicornModel.find({ gender: req.body.gender }, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});




app.use(express.static('./public'));

