function Plane (){
  this.isFlying = false;
};

Plane.prototype.land = function(){
  if(!this.isFlying){ throw new Error("Already landed") }
  this.isFlying = false;
};

Plane.prototype.takeOff = function(){
  if(this.isFlying){ throw new Error("Already flying") }
  this.isFlying = true;
};
