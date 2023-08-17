const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let busSchema = new Schema({
  id: {
    type: Number
  },
  date:{
    type:String
  },
  source: {
    type: String
  },
  destination: {
    type: String
  },
  totalSeat:{
    type:Number
  },
  category:{
    type:String
  },
  fare:{
    type:Number
  },
  boardingPoint:{
    type:String
  },
  boardingTime:{
    type:String
  },
  droppingPoint:{
    type:String
  },
  droppingTime:{
    type:String
  }

}, {
    collection: 'busList'
  })

module.exports = mongoose.model('Student', busSchema)