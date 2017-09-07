'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    json = require('./listings.json');

var listingList = [];

json.entries.forEach(function(element) {
  listingList.push(element);
}, this);

/* Connect to your database */
mongoose.connect(config.db.uri).then(function() {
  console.log("Connection to Database Opened");
  return Listing.insertMany(listingList);
}).then(function(){
  mongoose.connection.close();
  console.log("Connection Closed");
});

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */