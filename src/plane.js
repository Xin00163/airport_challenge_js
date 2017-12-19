function Plane (){
  this.isFlying = false;
};

Plane.prototype.land = function(){
  this.isFlying = true;
};

Plane.prototype.takeOff = function(){
  this.isFlying = false;
};
