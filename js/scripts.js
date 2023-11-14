
// Cambio de Modo Claro a Oscuro y viceversa 

const botonAccesibilidad = document.getElementById("botonAccesibilidad");


botonAccesibilidad.addEventListener("click", function () {

    document.body.classList.toggle("black-background");
});

// Alerta de Datos Del Desarrollador

const botonDatosDesarrollador = document.getElementById("datosDesarrollador");


botonDatosDesarrollador.addEventListener("click", function () {
    const datosDelDesarrollador = "Datos Del Desarrollador:\n\nFranco Libertini\nLibertini.f.a@gmail.com\n2915747629";
    alert(datosDelDesarrollador);
});
