describe("Airport", function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    airport = new Airport(30, weather=weather);
     plane = {
       land: function(){},
       takeOff: function(){},
     };
     weather = {
       isStormy: function(){
         return false;
       }
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

  it("Should take off a plane", function(){
    spyOn(plane, 'takeOff');
    airport.takeOff(plane);
    expect(plane.takeOff).toHaveBeenCalled();
  });

  it("Should release the plane when it takes off", function(){
    // capacity = airport.planes.length;
    spyOn(plane, 'takeOff');
    airport.land(plane);
    capacity = airport.planes.length;
    airport.takeOff(plane);
    expect(airport.planes.length).toEqual(0)
  });

  it("Should raise error when the plane is trying to land if the airport is full", function(){
    spyOn(plane, 'land');
    for(var i = 0; i < 30; i++){
      airport.land(plane)
    };
    // when checking errors, you must pass function(){} to expect
    expect(function(){
      airport.land(plane)
    }).toThrowError("Airport is full");
  });

  it("Should not allow plane to takeoff in stormy weather", function(){
    spyOn(weather, 'isStormy').and.returnValue(true);
    airport = new Airport(30, weather);
    expect(function(){
      airport.takeOff(plane);
    }).toThrowError("Weather is too stormy");
  });

  it("Should not allow plane to land in stormy weather", function(){
    spyOn(weather, 'isStormy').and.returnValue(true);
    airport = new Airport(30, weather);
    expect(function(){
      airport.land(plane);
    }).toThrowError("Weather is too stormy");
  })
});
