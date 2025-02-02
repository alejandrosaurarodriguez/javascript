$(document).ready(function () {
    $("#formulario").on("submit", function (e) {
      e.preventDefault(); // Previene el envío del formulario

      // Reinicia mensajes de error y éxito
      $(".error").hide();
      $("#successMessage").hide();

      let esValido = true;

      // Validar el campo de nombre
      const nombre = $("#nombre").val().trim();
      if (nombre === "") {
        $("#errorNombre").show();
        esValido = false;
      }

      // Validar el campo de correo electrónico
      const email = $("#email").val().trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón de email válido
      if (email === "" || !emailRegex.test(email)) {
        $("#errorEmail").show();
        esValido = false;
      }

      // Validar el campo de contraseña
      const password = $("#password").val();
      if (password.length < 8) {
        $("#errorPassword").show();
        esValido = false;
      }

      // Validar mayoría de edad
      let birthDate = new Date($("#fecha").val());
        let today = new Date();
        let edad = today.getFullYear() - birthDate.getFullYear();
        let monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            edad--;

            console.log(edad);

            if(edad < 18){
              console.log(edad);
              $("#errorFecha").show();
              esValido = false;
            }
        }

      // Si todo es válido, mostrar mensaje de éxito
      if (esValido) {
        $("#successMessage").show();
      }
    });
  });