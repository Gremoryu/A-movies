// Obtén todos los carruseles en la página

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('header');

    if (window.scrollY > 90) {
        navbar.classList.add('nav-scroll');
    } else {
        navbar.classList.remove('nav-scroll');
    }
});
const bannerData = [
    {
      imageUrl: './src/images/spiderman.jpeg',
      title: 'SPIDE-RMAN ACROSS THE SPIDER-VERSE',
      description: "Después de reunirse con Gwen Stacy, el amigable vecino de tiempo completo de Brooklyn Spiderman, es lanzado a través del multiverso, donde se encuentra a un equipo de gente araña encomendada con proteger su mera existencia.",
    },
    {
      imageUrl: './src/images/flash.jpeg',
      title: 'THE FLASH',
      description: 'Flash viaja a través del tiempo para evitar el asesinato de su madre, pero, sin saberlo, provoca una serie de cambios que originan la creación de un multiverso.',
    },
    {
        imageUrl: './src/images/harrypotter.jpg',
        title: 'HARRY POTTHER',
        description: 'Harry Potter es una serie de novelas fantásticas escrita por la autora británica J. K. Rowling, en la que se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería.',
      },
    // Agrega más objetos para más elementos en el banner
  ];

  let currentBannerIndex = 0;

  function updateBanner() {
    const peliculaPrincipal = document.querySelector('.pelicula-principal');
    const imagenFondo = bannerData[currentBannerIndex].imageUrl;
    const titulo = bannerData[currentBannerIndex].title;
    const descripcion = bannerData[currentBannerIndex].description;
  
    peliculaPrincipal.style.backgroundImage = `linear-gradient(rgba(1.2, 1.5, 1.3, 0.7), rgba(0, 0, 1.2, 0.5)), url(${imagenFondo})`;
    peliculaPrincipal.querySelector('.titulo').textContent = titulo;
    peliculaPrincipal.querySelector('.descripcion').textContent = descripcion;
  
    // Incrementa el índice actual para la próxima actualización del banner
    currentBannerIndex = (currentBannerIndex + 1) % bannerData.length;
  }
  
// Llama a la función para iniciar el banner automático
updateBanner();

// Establece un intervalo para cambiar automáticamente el banner cada cierto tiempo
const bannerInterval = setInterval(updateBanner, 6000); // Cambia cada 5 segundos (5000 milisegundos)

const carousels = document.querySelectorAll(".carousel");

carousels.forEach((carousel) => {
  const firstImg = carousel.querySelectorAll("img")[0];
  const arrowIcons = carousel.closest(".wrapper").querySelectorAll(".wrapper i");

  arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      let firstImgWidth = firstImg.clientWidth + 14;

      carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
      setTimeout(() => showHideIcons(carousel), 60);
    });
  });

  let isDragStart = false,
    isDragging = false,
    prevPageX,
    prevScrolleLeft,
    positionDiff;

  const showHideIcons = (currentCarousel) => {
    let scrollWidth = currentCarousel.scrollWidth - currentCarousel.clientWidth;

    currentCarousel
      .closest(".wrapper")
      .querySelector(".wrapper i:first-child").style.display =
      currentCarousel.scrollLeft === 0 ? "none" : "block";
    currentCarousel
      .closest(".wrapper")
      .querySelector(".wrapper i:last-child").style.display =
      currentCarousel.scrollLeft === scrollWidth ? "none" : "block";
  };

  const autoSlide = () => {
    if (
      carousel.scrollLeft ===
      carousel.scrollWidth - carousel.clientWidth
    )
      return;
    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;
    if (carousel.scrollLeft > prevScrolleLeft) {
      return (
        (carousel.scrollLeft +=
          positionDiff > firstImgWidth / 3
            ? valDifference
            : -positionDiff)
      );
    }
    carousel.scrollLeft -=
      positionDiff > firstImgWidth / 3
        ? valDifference
        : -positionDiff;
  };

  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrolleLeft = carousel.scrollLeft;
  };

  const draggin = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrolleLeft - positionDiff;
    showHideIcons(carousel);
  };

  const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if (!isDragging) return;
    isDragging = false;
    autoSlide();
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("touchstart", dragStart);

  carousel.addEventListener("mousemove", draggin);
  carousel.addEventListener("touchmove", draggin);

  carousel.addEventListener("mouseup", dragStop);
  carousel.addEventListener("mouseleave", dragStop);
  carousel.addEventListener("touchend", dragStop);
});

 
 