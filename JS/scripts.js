
//Business Logic for Travel Directory //

function FullDirectory() {
  this.destinations = {};
  this.currentId = 0;
}

FullDirectory.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId
};

FullDirectory.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations[Destination.name] = destination;
};


//Business Logic for destinations ----  //

function Destination(name, location, landmark, season,) {
  this.name = name;
  this.location = location;
  this.landmark = landmark;
  this.season = season;
}

  let destination = new Destination();
  const cdmx = new Destination ("Mexico City", "Mexico", "First Glass Church", "September through March");
  const ice = new Destination("Iceland", "Scandinavia", "Blue Lagoon", "March through August");





Destination.prototype.toString = function destinationToString() {
  fullInfo = this.name + "  is a city located in " + this.location + ". When visiting, a popular landmark to check out is the " + this.landmark + ". The recommended time for travel are the months " + this.season + ". ";
}





