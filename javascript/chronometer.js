function Chronometer(opts) {
  this.minDec = opts.minDec;
  this.minUni = opts.minUni;
  this.secDec = opts.secDec;
  this.secUni = opts.secUni;
  this.hunDec = opts.hunDec;
  this.hunUni = opts.hunUni;
  
  this.currentTime = 0;
  this.intervalId = null;
  this.splitList = opts.splitList;
}

Chronometer.prototype.CLICK_STEP = 10;

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(function() {
    this.currentTime += 1;
    this.drawTime();

  }.bind(this), this.CLICK_STEP);
};

Chronometer.prototype.getMinutes = function () {
  return Math.floor(this.currentTime /100/60);
  

};

Chronometer.prototype.getSeconds = function () {

    var getSecondsToRemove = this.getMinutes() * 60; 
    console.log('minutes: ' + this.getMinutes());
    return Math.floor(this.currentTime / 100) - getSecondsToRemove; 

};

Chronometer.prototype.getHundredthSeconds = function () {
  // TODO
  var getHundredSecondsToRemove = this.getSeconds() * 100; 
  var minutesToHundredSeconds = this.getMinutes() * 60 * 100;
  console.log('Seconds: ' + this.getSeconds());
  return Math.floor(this.currentTime) - getHundredSecondsToRemove - minutesToHundredSeconds; 

};

Chronometer.prototype.twoDigitsNumber = function (num) {
  // TODO
  if (num < 10) {
    return "0" + num.toString();
  } else {
    return num.toString();
  }

};

Chronometer.prototype.drawTime = function () {
  // TODO
  this.drawMinutes();
  this.drawSeconds();
  this.drawHundredthSeconds();
};

Chronometer.prototype.drawMinutes = function () {
  var minutes = this.twoDigitsNumber(this.getMinutes());
  this.minDec.innerText = minutes[0];
  this.minUni.innerText = minutes[1];
};

Chronometer.prototype.drawSeconds = function () {
  //this.secUni.innerText = this.getSeconds();
  var seconds = this.twoDigitsNumber(this.getSeconds());
  this.secDec.innerText = seconds[0];
  this.secUni.innerText = seconds[1];
};

Chronometer.prototype.drawHundredthSeconds = function () {
  // TODO
  var hundredseconds = this.twoDigitsNumber(this.getHundredthSeconds());
  this.hunDec.innerText = hundredseconds[0];
  this.hunUni.innerText = hundredseconds[1];
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.drawTime();
  this.splitList.innerHTML = '';
};

Chronometer.prototype.splitClick = function () {
  var element = document.createElement("li");
  element.innerText =
    this.twoDigitsNumber(this.getMinutes()) + ":" +
    this.twoDigitsNumber(this.getSeconds()) + ':' +
    this.twoDigitsNumber(this.getHundredthSeconds());

  this.splitList.appendChild(element)

};
