
window.sr = ScrollReveal({ reset: true});

sr.reveal(`#biografia`, {duration: 3000});

sr.reveal(`#certificados`, {duration: 3000});

sr.reveal(`#experiencias`, {duration: 3000});

sr.reveal(`#contato`, {duration: 3000});


/*
// Função para criar um slide automático
function autoSlide() {
    var slides = document.querySelectorAll('.slides input[type="radio"]');
    var currentSlide = document.querySelector('.slides input[type="radio"]:checked');

    // Encontrar o próximo slide
    var nextSlide = currentSlide.nextElementSibling;

    // Se chegou ao final, voltar para o primeiro slide
    if (!nextSlide) {
      nextSlide = slides1[0];
    }
    
    // Ativar o próximo slide
    nextSlide.checked = true;
  }

  // Iniciar o intervalo para avançar os slides a cada 4 segundos
  setInterval(autoSlide, 6000);

*/

let slideIndex = 0;

    function showSlides() {
      const slides = document.querySelectorAll('.slides input[type="radio"]');

      for (let i = 0; i < slides.length; i++) {
        slides[i].checked = false;
      }

      if (slideIndex >= slides.length) {
        slideIndex = 0;
      } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }

      slides[slideIndex].checked = true;
    }

    function nextSlide() {
      slideIndex++;
      showSlides();
    }

    function prevSlide() {
      slideIndex--;
      showSlides();
    }

    function autoSlide() {
      slideIndex++;
      showSlides();
    }

    // Iniciar o intervalo para avançar os slides a cada 4 segundos
    setInterval(autoSlide, 8000);

    showSlides();  // Mostra o primeiro slide ao carregar a página
  
  