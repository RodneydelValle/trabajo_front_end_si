document.getElementById("contactForm").addEventListener('submit', function (e) {
    e.preventDefault();
    let warnings = false;

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const terminos = document.getElementById("terminos").checked;

    const nombreWarning = document.getElementById("nombreWarning");
    const emailWarning = document.getElementById("emailWarning");
    const telefonoWarning = document.getElementById("telefonoWarning");
    const mensajeWarning = document.getElementById("mensajeWarning");
    const terminosWarning = document.getElementById("terminosWarning");
    const alerta = document.getElementById("alerta");

    // Limpiar advertencias anteriores
    nombreWarning.innerHTML = "";
    emailWarning.innerHTML = "";
    telefonoWarning.innerHTML = "";
    mensajeWarning.innerHTML = "";
    terminosWarning.innerHTML = "";
    alerta.innerHTML = "";

    if (nombre === "") {
        nombreWarning.innerHTML = "El nombre es obligatorio.";
        warnings = true;
    }

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(email)) {
        emailWarning.innerHTML = "El correo no es válido.";
        warnings = true;
    }

    if (telefono === "") {
        telefonoWarning.innerHTML = "El teléfono es obligatorio.";
        warnings = true;
    }

    if (mensaje === "") {
        mensajeWarning.innerHTML = "El mensaje es obligatorio.";
        warnings = true;
    }

    if (!terminos) {
        terminosWarning.innerHTML = "Debes aceptar los términos y condiciones.";
        warnings = true;
    }

    if (!warnings) {
        // Mostrar el modal de éxito
        $('#successModal').modal('show');
    }
});