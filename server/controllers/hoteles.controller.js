const Hotel = require('../models/hoteles');
const hotelCtrl = {};

hotelCtrl.getHoteles = async(req, res) => {
    const hoteles = await Hotel.find();
    res.json(hoteles);

}

hotelCtrl.createHotel = async(req, res) => {
    const hotel = new Hotel({
        name: req.body.name,
        direction: req.body.direction,
        stars: req.body.stars,
        price: req.body.price,
        service: req.body.service
    });
    await hotel.save();
    res.json({
        'status': 'Hotel Saved'
    });
};

hotelCtrl.getHotel = async(req, res) => {
    const hotel = await Hotel.findById(req.params.id);
    res.json('received');

};

hotelCtrl.editHotel = async(req, res) => {
    const { id } = req.params;
    const hotel = {
        name: req.body.name,
        direction: req.body.direction,
        stars: req.body.stars,
        price: req.body.price,
        service: req.body.service
    };
    await Hotel.findByIdAndUpdate(id, { $set: hotel }, { new: true });
    res.json({
        status: 'Hotel Updated'
    });

};

hotelCtrl.deleteHotel = async(req, res) => {
    await Hotel.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Hotel Delete'
    });


};

module.exports = hotelCtrl;