document.addEventListener('DOMContentLoaded', function () {

    // 1. Funcion para mostrar saludo dinamico
    function mostrarSaludoDinamico() {
        const saludoDiv = document.getElementById('saludoDinamico');
        if (!saludoDiv) return; 

        const horaActual = new Date().getHours();
        let saludo = '';

        if (horaActual < 12) {
            saludo = '¡Buenos días!';
        } else if (horaActual < 18) {
            saludo = '¡Buenas tardes!';
        } else {
            saludo = '¡Buenas noches!';
        }
        saludoDiv.textContent = saludo;
    }


    const btnVolverArriba = document.getElementById('btnVolverArriba');

    if (btnVolverArriba) { 
        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                btnVolverArriba.style.display = 'block';
            } else {
                btnVolverArriba.style.display = 'none';
            }
        }
    }


    function actualizarAnoFooter() {
        const yearSpan = document.getElementById('currentYear');
        if (yearSpan) { 
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    function inicializarTooltips() {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    }
    
    mostrarSaludoDinamico();
    actualizarAnoFooter();
    inicializarTooltips();

}); 


// 5. Funcion para el boto
function solicitarDatos() {
    const nombre = prompt("Por favor, ingresa tu nombre completo:");
    if (nombre === null || nombre.trim() === "") {
        alert("No ingresaste un nombre. Intenta de nuevo.");
        return;
    }

    const email = prompt("Ingresa tu correo electrónico institucional:");
    if (email === null || email.trim() === "") {
        alert("No ingresaste un correo. Intenta de nuevo.");
        return;
    } else if (!validarEmail(email)) {
        alert("El formato del correo electrónico no es válido. Intenta de nuevo.");
        return;
    }

    const institucion = prompt("¿A qué institución perteneces?");
    if (institucion === null || institucion.trim() === "") {
        alert("No ingresaste una institución. Intenta de nuevo.");
        return;
    }

    const datosMostradosDiv = document.getElementById('datosMostrados');
    if (datosMostradosDiv) {
        datosMostradosDiv.innerHTML = `
            <h3 class="text-center mb-3">Datos Personales Ingresados</h3>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Institución:</strong> ${institucion}</p>
            <p class="mt-3 text-center text-success">Gracias por tu interés. Un administrador revisará tu solicitud y se pondrá en contacto contigo pronto.</p>
        `;
        datosMostradosDiv.style.display = 'block';
        datosMostradosDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

    } else {
        console.error("El div 'datosMostrados' no se encontró en el DOM.");
        alert(`Datos recibidos:\nNombre: ${nombre}\nEmail: ${email}\nInstitución: ${institucion}\n(El div para mostrar los datos no fue encontrado)`);
    }
}

function validarEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function volverArriba() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}


// 6. Activar Navegacin Activa 
function activarEnlaceNavegacion() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html"; 
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split("/").pop();
        link.classList.remove('active');
        if (linkPage === currentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}
document.addEventListener('DOMContentLoaded', activarEnlaceNavegacion);