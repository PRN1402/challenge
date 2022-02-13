const mongoose = require("mongoose");

const ArgoModel = mongoose.model(
    "bd-chaltec",
{
    name: {
        type: String,
        required: true
    }

},
"argos"
);
module.exports = {ArgoModel};