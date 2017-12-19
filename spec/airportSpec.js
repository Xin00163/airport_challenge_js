describe("Airport", function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
     plane = {
       land: function(){

       },
     }
    //plane = jasmine.createSpyObj('plane', ['land']);
  });

  it("Should have no planes on initialization", function(){
    expect(airport.planes.length).toEqual(0);
  });

  it("Should have a default capacity of 30", function(){
    expect(airport.capacity).toEqual(30);
  });

  it("Should have a variable capacity", function(){
    airport = new Airport(20);
    expect(airport.capacity).toEqual(20);
  });

  it("Should land a plane", function(){
    spyOn(plane, 'land');
    airport.land(plane);
    expect(plane.land).toHaveBeenCalled();
  });

  it("Should store the plane when a plane lands", function(){
    capacity = airport.planes.length;
    spyOn(plane, 'land');
    airport.land(plane);
    expect(airport.planes.length - capacity).toEqual(1)
  });

});
