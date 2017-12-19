function Airport(capacity) {
  const MAX_CAPACITY = 30;
  this.planes = [];
  this.capacity = capacity ? capacity : MAX_CAPACITY; // Conditional assignment
}

Airport.prototype.land = function(plane){
  plane.land()
  this.planes.push(plane)
}
