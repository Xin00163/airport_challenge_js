function Airport(capacity) {
  const MAX_CAPACITY = 30;
  this.planes = [];
  this.capacity = capacity ? capacity : MAX_CAPACITY; // Conditional assignment
}

Airport.prototype.land = function(plane){
  if (this.planes.length === this.capacity) { throw Error("Airport is full")}
  plane.land()
  this.planes.push(plane)
}

Airport.prototype.takeOff = function(plane){
  plane.takeOff()
  this.planes.splice(this.planes.indexOf(plane), 1)
}
