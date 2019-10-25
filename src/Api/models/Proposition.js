const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Proposition
let Proposition = new Schema({
  Nav: {
    type: String
  },
Pasnav: {
    type: String
  },
  Herem: {
    type: String
  },
  Pesniyari:{
    type: String
  }
},{
    collection: 'proposition'
});

module.exports = mongoose.model('Proposition', Proposition);
