var startTime;
var limite;
var temporizador;

function documentLoaded() {
  "use strict";

    document.getElementById("clockBtn").addEventListener("click", botaoClicked, false);
  console.log("Documento carregado");
}


function botaoClicked() {
  "use strict";

  let minutes = Math.floor(document.getElementById('clock-minute').value);
  let seconds = Math.floor(document.getElementById('clock-seconds').value);

  startTime = new Date();

  limite = parseInt(document.getElementById("txtTempo").value);

  let requiredElapsedTime = minutes * 60 + seconds; // In Seconds;

  document.getElementById('clock-minute').value = '';
  document.getElementById('clock-seconds').value = '';


  temporizador = setInterval(() => updateTime(requiredElapsedTime), 1000);
}

function updateTime(requiredElapsedTime) {
  "use strict";

  var currentTime = new Date();

  var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

  var minutos = Math.floor(elapsed / 60);
  var segundos = Math.floor(elapsed % 60);

  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  document.getElementById("clock-minute").value = minutos;
  document.getElementById("clock-seconds").value = segundos;


  console.log('Elapsed: ' + elapsed);
  console.log('Required Elapsed Time: ' + requiredElapsedTime);
  if (elapsed > requiredElapsedTime) {

    document.getElementById("clock-minute").value = '';
    document.getElementById("clock-seconds").value = '';
    clearInterval(temporizador);
  } 

}