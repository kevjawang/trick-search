const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Entry = new Schema(
    {
        url: { type: String, required: true},
    }
)

module.exports = mongoose.model('entry', Entry)
