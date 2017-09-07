/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'),
    Listing = require('./ListingSchema.js'),
    config = require('./config'),
    async = require('async');

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */

    Listing.findOne({'name' : 'Library West'}, function(err, listing) {
      if(err) handleError(err);
      console.log(listing);
    });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
    Listing.findOneAndRemove({'code' : 'CABL'}, function(err, listing) {
      if(err) handleError(err);
      console.log(listing);
    });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.update({'code':'PHL'}, {'address' : '102 Phelps Lab, Gainesville, FL 32611'}, function(err, listing) {
    if(err) handleError(err);
  });
  Listing.findOne({'code' : 'PHL'}, function(err, listing) {
    if(err) handleError(err);
    console.log(listing);
  });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  
  Listing.find({}, function(err, listing) {
    // if(err) handleError(err);
    console.log(listing);
  });
 
};

mongoose.connect(config.db.uri).then(function(){
  console.log("Conection to Database Opened");
}).then(function() {
  findLibraryWest();
  removeCable();
  updatePhelpsLab();
  retrieveAllListings();
});

