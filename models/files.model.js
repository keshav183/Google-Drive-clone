const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: [true,'path is requires']
    },
    originalname: {
        type: String,
        required: [true,'originalname is requires']
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true,'user is required']
    }
})