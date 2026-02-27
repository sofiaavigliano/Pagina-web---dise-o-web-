// Función para validar el formulario
function validateForm(event) {
  event.preventDefault(); // Prevenir el envío por defecto
  
  // Obtener referencias a los campos del formulario
  var name = document.getElementById('name');
  var email = document.getElementById('mail');
  var message = document.getElementById('msg');
  
  // Validar que los campos obligatorios no estén vacíos
  if (name.value.trim() === '') {
    alert('Por favor, ingresa tu nombre.');
    name.focus();
    return false;
  }
  
  if (email.value.trim() === '') {
    alert('Por favor, ingresa tu correo electrónico.');
    email.focus();
    return false;
  }
  
  if (message.value.trim() === '') {
    alert('Por favor, ingresa tu mensaje.');
    message.focus();
    return false;
  }
  
  // Si pasa la validación, mostrar alerta de éxito
  alert('¡Formulario enviado exitosamente!');
  
  // Opcional: restablecer el formulario
  document.getElementById('myForm').reset();
}

// Asignar la función de validación al evento submit del formulario
document.getElementById('myForm').addEventListener('submit', validateForm);