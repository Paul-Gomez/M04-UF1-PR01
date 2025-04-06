document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario-contacto");
    const mensaje = document.getElementById("mensaje-confirmacion");
  
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const motivo = document.getElementById("motivo").value;
  
      if (nombre === "" || email === "" || motivo === "") {
        mensaje.textContent = "Por favor, completa todos los campos.";
        mensaje.style.color = "red";
      } else {
        mensaje.textContent = `¡Gracias por tu mensaje, ${nombre}! Te responderemos pronto.`;
        mensaje.style.color = "#4CAF50";
  
        // Reset del formulario
        formulario.reset();
      }
    });
  
    // Script adicional: cambia color del fondo al hacer clic en el título
    const titulo = document.querySelector("h1");
    titulo.addEventListener("click", () => {
      document.body.style.backgroundColor = "#E3F2FD"; // azul claro
    });
  });
  