const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    creator : {
        type : String,
        required : true
    },
    img : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
})
const TrendsModal = mongoose.models.trend || mongoose.model('trend',schema)
module.exports = TrendsModal