describe("A plane", function(){
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  it("should not be flying", function(){
    expect(plane.isFlying).toBe(false);
  });

  it("should not be flying when landed", function(){
    plane.land()
    expect(plane.isFlying).toBe(true);
  });

  it("should be flying after taking off", function(){
    plane.takeOff()
    expect(plane.isFlying).toBe(false);
  });
});
