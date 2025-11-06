document.addEventListener("DOMContentLoaded", () => {
  let heroe = prompt("¿Cuál es tu superhéroe favorito?");
  if (heroe) {
    if (heroe.toLowerCase() === "batman") {
      alert("¡Muy bien! 🦇 Batman es el mejor.");
    } else {
      alert("¿" + heroe + "?  Batman es mejor. ");
    }
  }
});
