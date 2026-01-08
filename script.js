document.addEventListener('DOMContentLoaded', () => {

  score1 = 0;
  score2 = 0;

});

function hraj() {

  vitez1.innerHTML = "Hráč 1";
  vitez2.innerHTML = "Hráč 2";
  vitez1.style.color = "";
  vitez2.style.color = "";

  hrac1 = volba1.value * 1;
  hrac2 = Math.floor(Math.random() * 5);

  obr1.src = hrac1 + ".png";
  obr2.src = hrac2 + ".png";

  if (hrac1 === hrac2) {
    vitez1.innerHTML = "Remíza.";
    vitez2.innerHTML = "Remíza.";
  }
  else if (
    (hrac1 === 0 && (hrac2 === 4 || hrac2 === 3)) ||
    (hrac1 === 4 && (hrac2 === 2 || hrac2 === 3)) ||
    (hrac1 === 2 && (hrac2 === 0 || hrac2 === 1)) ||
    (hrac1 === 3 && (hrac2 === 2 || hrac2 === 1)) ||
    (hrac1 === 1 && (hrac2 === 4 || hrac2 === 0))
  ) {
    vitez1.innerHTML = "Hráč 1<br/>vyhrál.";
    vitez1.style.color = "red";
    score1 = score1 + 1;
  }
  else {
    vitez2.innerHTML = "Hráč 2<br/>vyhrál.";
    vitez2.style.color = "red";
    score2 = score2 + 1;
  }

  skore1.innerHTML = score1;
  skore2.innerHTML = score2;
}
