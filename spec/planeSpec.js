describe("A plane", function(){
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  it("should not be flying", function(){
    expect(plane.isFlying).toBe(false);
  });

  it("should not be flying when landed", function(){
    plane.takeOff()
    plane.land()
    expect(plane.isFlying).toBe(false);
  });

  it("should be flying after taking off", function(){
    plane.takeOff()
    expect(plane.isFlying).toBe(true);
  });

  it("Cannot land when landed", function(){
    expect(function(){
      plane.land();
    }).toThrowError("Already landed");
  });

  it("Cannot takeoff when flying", function(){
    plane.takeOff();
    expect(function(){
      plane.takeOff();
    }).toThrowError("Already flying");
  });
});
