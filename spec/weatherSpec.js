describe("Weather", function(){

  beforeEach(function(){
    weather = new Weather();
  });

  it("generate a weather", function(){
    expect(weather.isStormy()).toBe(false);
  });

});
