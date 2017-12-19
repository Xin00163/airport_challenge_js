describe("Weather", function(){

  beforeEach(function(){
    weather = new Weather();
    Math = {
      random: function(){
        return 0.15;
      }
    }
  });

  it("Can generate stormy weather", function(){
    expect(weather.isStormy()).toBe(true);
  });
});
