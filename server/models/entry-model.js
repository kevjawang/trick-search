const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EntrySchema = new Schema(
    {
        url: { type: String, required: true},
        timestamp: String,
        trick_tags: [String],
        categories: [String],
        skateboarder: {type: Schema.Types.ObjectId, ref: 'Skateboarder'},
        // spot: {},
        // obstacle_type: {},
        // video: {}
    }
)

module.exports = mongoose.model('Entry', EntrySchema)
