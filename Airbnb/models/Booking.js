const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    
    booking_date: {
        type: Date,
        required: true
    },
    
    booking_start:{
      type: Date,
      required: [true, 'Enter start date'],
    },

    booking_end: {
      type: Date,
      required: [true, 'Enter start date'],
    },

    // date: {
    //     type: Date,
    //     required: true
    //   },
    // creator: {
    //       type: Schema.Types.ObjectId,
    //       ref: 'User'
    //   },
    

});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;