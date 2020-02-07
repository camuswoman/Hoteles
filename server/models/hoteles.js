const mongoose = require('mongoose');
const { Schema } = mongoose;

const HotelSchema = new Schema({
    name: { type: String, required: true },
    direction: { type: String, required: true },
    stars: { type: Number, required: true },
    price: { type: Number, required: true },
    service: { type: String, required: true }
});

module.exports = mongoose.model('Hoteles', HotelSchema);