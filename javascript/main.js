var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');

var chronometer = new Chronometer({
  minDec: document.getElementById('minDec'),
  minUni: document.getElementById('minUni'),
  secDec: document.getElementById('secDec'),
  secUni: document.getElementById('secUni'),
  hunDec: document.getElementById('hunDec'),
  hunUni: document.getElementById('hunUni'),
  splitList: document.getElementById('splits')
});

// Start/Stop Button
btnLeft.onclick = function() {
 
 if (this.classList.contains("start")){
  this.classList.add("stop");
  this.classList.remove("start");
  this.innerText = "STOP";

  btnRight.classList.add("split");
  btnRight.classList.remove("reset");
  btnRight.innerText = "SPLIT";
  
  chronometer.startClick();

 } else {
  this.classList.add("start");
  this.classList.remove("stop");
  this.innerText = "START";

  btnRight.classList.add("reset");
  btnRight.classList.remove("split");
  btnRight.innerText = "RESET";
  chronometer.stopClick();

 }
};

// Reset/Split Button
btnRight.onclick = function() {
  if (btnRight.classList.contains("reset")){
    chronometer.resetClick();
  } else{ 
chronometer.splitClick();
  }
};
