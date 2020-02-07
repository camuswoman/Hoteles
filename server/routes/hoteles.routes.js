const express = require('express');
const router = express.Router();

const hotel = require('../controllers/hoteles.controller');

router.get('/', hotel.getHoteles);
router.post('/', hotel.createHotel);
router.get('/:id', hotel.getHotel);
router.put('/:id', hotel.editHotel);
router.delete('/:id', hotel.deleteHotel);

module.exports = router;