var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
    { text: "Cuando me siento en tus brazos, se me olvida todo", time: 0 },
    { text: "Soy afortunado por tenerte a ti", time: 6 },
    { text: "Aquí, despertando a mi lado", time: 13 },
    { text: "Estoy en deuda porque llegaste a mi vida", time: 19 },
    { text: "Como si estuvieras hecha justo a mi medida", time: 27 },
    { text: "Y yo no lo pedí, solito me llegó", time: 33 },
    { text: "Y vale el doble, sí, un regalo de Dios", time: 38 },
    { text: "Destinado para mí", time: 46 },
    //
    { text: "Voy a ser el encargado de cuidarte siempre", time: 52 },
    { text: "Que nada te falte", time: 59 },
    { text: "Mi única misión será hacerte muy feliz", time: 66 },
    
    { text: "En las buenas y en las malas estaré contigo", time: 74 },
    { text: "Para lo que necesites", time: 82 },
    { text: "Pase lo que pase, voy a estar ahí", time: 84 },
    { text: "La recompensa para mí", time: 94 },
    { text: "Es mirar tu linda carita sonreír", time: 98 },
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