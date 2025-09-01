// Crear el botón una sola vez, en ámbito global
const btnRegresar = (() => {
  const btn = document.createElement("input");
  btn.type = "button";
  btn.value = "Regresar";
  btn.className = "btn btn-primary";
  btn.addEventListener("click", () => cambiarTexto("default"));
  return btn;
})();


function cambiarTexto(tipo) {
  const titulo = document.getElementById("nosotros-titulo");
  const texto = document.getElementById("nosotros-texto");
  const contenedorBTN = document.querySelector(".add-btn"); // primer .add-btn

  if (!contenedorBTN) {
    console.warn("No existe un elemento con la clase .add-btn");
    return;
  }

  switch (tipo) {
    case "mision":
      titulo.textContent = "Nuestra Misión";
      texto.textContent = "Nuestra misión es proporcionar asesoría legal estratégica que anticipe riesgos, resuelva conflictos y cree valor tangible para empresas y emprendedores, siempre con los más altos estándares éticos profesionales.";
      if (!contenedorBTN.contains(btnRegresar)) {
        contenedorBTN.appendChild(btnRegresar);
      }
      break;

    case "vision":
      titulo.textContent = "Nuestra Visión";
      texto.textContent = "Ser el despacho de abogados de referencia para pymes y corporativos en México, reconocido por nuestra capacidad para transformar el complejo panorama legal en ventajas competitivas para nuestros clientes.";
      // Si quieres ocultar el botón aquí:
      if (!contenedorBTN.contains(btnRegresar)) {
        contenedorBTN.appendChild(btnRegresar);
      }
      break;

    case "valores":
      titulo.textContent = "Nuestros Valores";
      texto.textContent = "Excelencia jurídica, integridad inquebrantable, innovación en soluciones legales y compromiso absoluto con los resultados de nuestros clientes.";
      if (!contenedorBTN.contains(btnRegresar)) {
        contenedorBTN.appendChild(btnRegresar);
      }
      break;

    default:
      titulo.textContent = "Haske - Despacho de Abogados con Visión Integral";
      texto.textContent = "Somos un bufete jurídico mexicano especializado en derecho corporativo, laboral y mercantil. Combinamos expertise legal con comprensión empresarial para ofrecer soluciones jurídicas que realmente impulsan el crecimiento de tu organización.";
      if (btnRegresar.parentNode) btnRegresar.remove();
  }
}


        
        // Efecto hover para las tarjetas de servicios
        document.addEventListener('DOMContentLoaded', function() {
            const servicioCards = document.querySelectorAll('.servicio-card');
            
            servicioCards.forEach(card => {
                const originalSrc = card.querySelector('img').src;
                
                card.addEventListener('mouseenter', function() {
                    // Cambiar a imagen de hover (aquí puedes cambiar por la ruta de tu imagen hover)
                    if (card.getAttribute('data-bs-target') === '#servicioModal1') {
                        this.querySelector('img').src = 'assets/img/wesley-tingey-9z9fxr_7Z-k-unsplash-hover.jpg';
                    } else if (card.getAttribute('data-bs-target') === '#servicioModal2') {
                        this.querySelector('img').src = 'assets/img/pexels-rdne-7948058-hover.jpg';
                    } else if (card.getAttribute('data-bs-target') === '#servicioModal3') {
                        this.querySelector('img').src = 'assets/img/pexels-n-voitkevich-6863175-hover.jpg';
                    }
                });
                
                card.addEventListener('mouseleave', function() {
                    // Volver a la imagen original
                    this.querySelector('img').src = originalSrc;
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            var backToTopButton = document.querySelector('.back-to-top');
            
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('show');
                } else {
                    backToTopButton.classList.remove('show');
                }
            });
            
            backToTopButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            // Navegación suave para los enlaces del navbar
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        });

document.addEventListener('DOMContentLoaded', function() {
    // Código a ejecutar cuando el DOM esté completamente cargado
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Animación para todos los elementos de párrafo <p>
    gsap.utils.toArray('p').forEach(p => {
        gsap.fromTo(p, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: p,
                    start: "top 85%",
                    end: "top 15%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Animación para todos los encabezados <h1>, <h2>, <h3>, <h4>, <h5>, <h6>
    gsap.utils.toArray('h1, h2, h3, h4, h5, h6').forEach(heading => {
        gsap.fromTo(heading, 
            { opacity: 0, y: 70 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: heading,
                    start: "top 85%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Efecto adicional para el título principal (h1) si existe
    const mainTitle = document.querySelector('h1');
    if (mainTitle) {
        gsap.fromTo(mainTitle, 
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: mainTitle,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    }
});