var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
    { text: "Cuando me siento en tus brazos, se me olvida todo", time: 2 },
    { text: "Soy afortunado por tenerte a ti", time: 6 },
    { text: "Aquí, despertando a mi lado", time: 13 },
    { text: "Estoy en deuda porque llegaste a mi vida", time: 14 },
    { text: "Como si estuvieras hecha justo a mi medida", time: 22 },
    { text: "Y yo no lo pedí, solito me llegó", time: 27 },
    { text: "Y vale el doble, sí, un regalo de Dios", time: 32 },
    { text: "Destinado para mí", time: 38 },
    { text: "Que nada te falte", time: 42 },
    //{ text: "Voy a ser el encargado de cuidarte siempre", time: 42 },
    //{ text: "Mi única misión será hacerte muy feliz", time: 44 },
    //{ text: "En las buenas y en las malas estaré contigo", time: 46 },
    //{ text: "Para lo que necesites", time: 48 },
    //{ text: "Pase lo que pase, voy a estar ahí", time: 50 },
    //{ text: "La recompensa para mí", time: 52 },
    //{ text: "Es mirar tu linda carita sonreír", time: 54 },
    //{ text: "¡Ay-ay-ay, chiquita!", time: 56 },
    //{ text: "Es Julión Álvarez", time: 58 },
    //{ text: "Y su Norteño Banda, oiga, ¡ah!", time: 60 },
    //{ text: "Como si estuvieras hecha justo a mi medida", time: 62 },
    //{ text: "Y yo no lo pedí, solito me llegó", time: 64 },
    //{ text: "Y vale doble, sí, un regalo de Dios", time:  },
    //{ text: "Destinado para mí", time: 8 },
    //{ text: "Voy a ser el encargado de cuidarte siempre", time: 8 },
    //{ text: "Que nada te falte", time: 8 },
    //{ text: "Mi única misión será hacerte muy feliz", time: 8 },
    //{ text: "En las buenas y en las malas estaré contigo", time: 8 },
    //{ text: "Para lo que necesites", time: 8 },
    //{ text: "Pase lo que pase, voy a estar ahí", time: 8 },
    //{ text: "La recompensa para mí", time: 8 },
    //{ text: "Es mirar tu linda carita sonreír", time: 8 }
];

function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  }
  else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}
setTimeout(ocultarTitulo, 216000);