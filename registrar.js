// Selección del formulario
const formRegistrar = document.getElementById('formRegistrar');

// Escuchar el evento de envío del formulario
formRegistrar.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir envío predeterminado

    // Obtener los valores de los campos
    const nombreDueño = document.getElementById('nombreDueño').value;
    const telefonoDueño = document.getElementById('telefonoDueño').value;
    const correoDueño = document.getElementById('correoDueño').value;
    const nombreMascota = document.getElementById('nombreMascota').value;
    const especie = document.getElementById('especie').value;
    const raza = document.getElementById('raza').value || "No especificado";
    const edad = document.getElementById('edad').value;
    const comentarios = document.getElementById('comentarios').value || "Sin comentarios";

    // Mostrar un mensaje de confirmación
    alert(`¡Mascota registrada con éxito!
    Nombre del dueño: ${nombreDueño}
    Teléfono: ${telefonoDueño}
    Correo: ${correoDueño}
    Nombre de la mascota: ${nombreMascota}
    Especie: ${especie}
    Raza: ${raza}
    Edad: ${edad} años
    Comentarios: ${comentarios}`);

    // Limpiar el formulario
    formRegistrar.reset();
});
