//Business logic for DestinationDirectory//

function DestinationDirectory() {
  this.destinations = {};
  this.currentId = 0;
}
//function ^ starts list of destinations at index of 0//

DestinationDirectory.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
};
//passing a Destination object that has a (name location landmark and season) and assigns incremental id by 1 and return)


DestinationDirectory.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
};
//^gives each property of the destination directory an index id in order (+1)//

DestinationDirectory.prototype.findDestination = function(id) {
  if (this.destinations[id] !=undefined) {
    return this.destinations[id];
  }
  return false;
};

//Business Logic for destinations ----  //

function Destination(city, location, landmark, season,) {
  this.city = city;
  this.location = location;
  this.landmark = landmark;
  this.season = season;
}

Destination.prototype.fullInfo = function() {
  return this.city + " is so nice in " + this.season + ". It's located in " + this.location + " and has cool places to visit such as the " + this.landmark + "!"; 
};

// UI logic //
//test!

let destinationDirectory = new DestinationDirectory();
let cdmx = new Destination ("Mexico City", "Mexico", "First Glass Church", "the Winter");
let ice = new Destination("Iceland", "Scandinavia", "Blue Lagoon", " the Spring");
destinationDirectory.addDestination(cdmx);
destinationDirectory.addDestination(ice);

//then call cdmx; in console to test//

//successful fullInfo test cdmx.fullInfo();//
