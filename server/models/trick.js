const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TrickSchema = new Schema(
    {
        title: { type: String, required: true},
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

module.exports = mongoose.model('Trick', TrickSchema)
