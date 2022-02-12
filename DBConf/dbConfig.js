const mongoose =require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/bd-chaltec",
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if(!err) console.log("MongoDB connectée"); else
        console.log("Connection error" + err);
    }
)