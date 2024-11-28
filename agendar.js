// Selección del formulario
const formAgendar = document.getElementById('formAgendar');

// Escuchar el evento de envío del formulario
formAgendar.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir envío predeterminado

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const nombreMascota = document.getElementById('nombreMascota').value;
    const servicio = document.getElementById('servicio').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    // Mostrar un mensaje de confirmación
    alert(`¡Cita agendada con éxito!
    Nombre del dueño: ${nombre}
    Teléfono: ${telefono}
    Correo: ${correo}
    Mascota: ${nombreMascota}
    Servicio: ${servicio}
    Fecha: ${fecha}
    Hora: ${hora}`);

    // Limpiar el formulario
    formAgendar.reset();
});
