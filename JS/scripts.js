
function FullDirectory() {
  this.destinations = {};
  this.currentId = 0;
}



FullDirectory.prototype.addDestination = function(destination) {
  destination.name = this.assignID;
  this.destinations[destination.id] = destination;
  };

FullDirectory.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;

};


//Business Logic for destination ----  //

function Destination(name, location, landmark, season,) {
  this.name = name;
  this.location = location;
  this.landmark = landmark;
  this.season = season;
}


// UI logic 

let fullDirectory = new FullDirectory();
let cdmx = new Destination ("Mexico City", "Mexico", "First Glass Church", "September through March");
let ice = new Destination("Iceland", "Scandinavia", "Blue Lagoon", "March through August");




// Destination.prototype. = () {
//   fullInfo = this.name + "  is a city located in " + this.location + ". When visiting, a popular landmark to check out is the " + this.landmark + ". The recommended time for travel are the months " + this.season + ". ";
//   return 
// }


fullDirectory.destinations.forEach(function(destination) {
  console.log("Let's go to" + destination.name + "!");
});
//stating a function for destinations within the "fulldirectory" object//




