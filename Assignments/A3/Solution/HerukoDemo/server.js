const express = require('express');
const { listen } = require('express/lib/application');
const app = express()

app.listen(process.env.PORT || 5000, function (err) {
    if (err)
        console.log(err);
})




const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://nabil828:comp1537@cluster0.lbm8g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true });
const unicornSchema = new mongoose.Schema({
    name: String,
    gender: String,
    Vampires: Number,
    weight: Number,
    dob: Date,
    loves: [String]
});

const unicornModel = mongoose.model("unicorns", unicornSchema);



app.get('/unicorns/:unicorn_name', function (req, res) {
    console.log("received a request for " + req.params.unicrons_name);
    unicornModel.find({ name: req.params.unicorn_name }, function (err, unicrons) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + JSON.stringify(unicrons));
        }
        res.send(JSON.stringify(unicrons));
    });
})

app.get('/unicorns', function (req, res) {
    unicornModel.find({}, function (err, unicrons) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + JSON.stringify(unicrons));
        }
        res.send(JSON.stringify(unicrons));
    });
})

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + "/index.html");
// })

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({
    extended: true
}));


app.post("/findByName", function (req, res) {
    console.log(req.body.unicornName);

    unicornModel.find({
        name: req.body.unicornName
    }, function (err, unicrons) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + JSON.stringify(unicrons));
        }
        res.send(JSON.stringify(unicrons));
    });

})




app.post("/findByWeight", function (req, res) {
    // console.log("/findByWeight"+ "got called");
    console.log(Number(req.body.lowerWeight));
    unicornModel.find({
        "weight": { $gt: Number(req.body.lowerWeight) },
        "weight": { $lt: Number(req.body.higherWeight) }


    }, function (err, unicrons) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + JSON.stringify(unicrons));
        }
        res.send(JSON.stringify(unicrons));
    });

    // }

})


app.post("/findByFood", function (req, res) {
    // console.log("/findByWeight"+ "got called");
    // console.log(req.body.apple);
    // console.log(req.body.orange);
    aList = []

    if (req.body.apple == "checked")
        aList.push({
            "loves": { $in: ["apple"] }
        })
    if (req.body.carrot == "checked")
        aList.push({
            "loves": { $in: ["carrot"] }
        })

    console.log(aList)
    unicornModel.find(
        {
            $and: aList
        }
        , function (err, unicrons) {
            if (err) {
                console.log("Error " + err);
            } else {
                console.log("Data " + JSON.stringify(unicrons));
            }
            res.send(JSON.stringify(unicrons));
        });



})



app.use(express.static('./public'))