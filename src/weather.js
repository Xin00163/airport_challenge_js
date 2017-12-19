function Weather() {
};

Weather.prototype.isStormy = function(){
  return this._generateWeather === "stormy";
}

Weather.prototype._generateWeather = function(){
  weatherTypes = ["clear", "clear", "clear", "stormy", "clear", "clear", "stormy"]
  weatherTypes[Math.floor(Math.random() * weatherTypes.length) + 1]
};
