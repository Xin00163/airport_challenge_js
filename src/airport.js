function Airport(capacity, weather=new Weather()) {
  const MAX_CAPACITY = 30;
  this.planes = [];
  this.capacity = capacity ? capacity : MAX_CAPACITY; // Conditional assignment
  this.weather = weather;
}

Airport.prototype.land = function(plane){
  if(this._isFull()) { throw Error("Airport is full")}
  if(this.weather.isStormy()) { throw Error("Weather is too stormy") }
  plane.land()
  this.planes.push(plane)
}

Airport.prototype.takeOff = function(plane){
  if(this.weather.isStormy()) { throw Error("Weather is too stormy") }
  plane.takeOff()
  this.planes.splice(this.planes.indexOf(plane), 1)
}

Airport.prototype._isFull = function(){
  return this.planes.length >= this.capacity;
}
