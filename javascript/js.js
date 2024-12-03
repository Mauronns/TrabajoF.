function cambiarEstilo() {
    document.body.style.backgroundColor = '#FFE4C4';
const elementos = document.querySelectorAll("h1, h3, h4, p");
elementos.forEach(elemento => {
  elemento.style.color = "black"
})

    document.getElementById('botonOriginal').style.display = 'none';
    document.getElementById('nuevoBoton').style.display = 'block';
}
function resetearEstilo() {
    document.body.style.backgroundColor = '';
    const elementos = document.querySelectorAll("h1, h3, h4, p");
    elementos.forEach(elemento => {
      elemento.style.color = ""
    })

    document.getElementById('botonOriginal').style.display = 'block';
    document.getElementById('nuevoBoton').style.display = 'none';
}
function info() {alert("Hola, yo soy Mauro y estoy haciendo el curso de programacion web: front-end")}
