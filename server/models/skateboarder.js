const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SkateboarderSchema = new Schema(
    {
        name: String,
        aliases: [String]
    }
)

module.exports = mongoose.model('Skateboarder', SkateboarderSchema)
