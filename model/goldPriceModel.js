const mongoose = require("mongoose")
const goldPriceSchema = mongoose.Schema(
    {
        "22K": {
            type: Number,
            required: true
        },
        "24K": {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("goldPrice", goldPriceSchema)