
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


    function submitForm() {
      alert('Formulario Enviado!'); // Mensagem do alerta
  }

    function updateClock() {
      const timezone = document.getElementById('timezone').value;
      const options = { timeZone: timezone, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    
      const formattedTime = new Intl.DateTimeFormat('default', options).format(new Date());
      document.getElementById('clock').textContent = formattedTime;
    }
    
    // Atualiza o relógio assim que a página é carregada
    updateClock();


    //Codigo da API de Tempo


    document.getElementById('weatherForm').addEventListener('submit', function (event) {
      event.preventDefault();
      const apiKey = '0ddf4dc551418b4e957dcebf7b0cf24f';
      const city = document.getElementById('cityInput').value;
      const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
      document.getElementById('loading').style.display = 'block';
    
      fetch(endpoint)
        .then(response => response.json())
        .then(data => {
          document.getElementById('loading').style.display = 'none';
          document.getElementById('city').textContent = data.name;
          const temperatureCelsius = Math.round(data.main.temp - 273.15);
          document.getElementById('temperature').textContent = `${temperatureCelsius}°C`;
          document.getElementById('description').textContent = data.weather[0].description;
    
          // Selecionar o elemento com a classe weather-container
          const weatherContainer = document.querySelector('.weather-container');
    
          // Verificar se a temperatura é superior a 30ºC
          if (temperatureCelsius > 29) {
            // Se sim, modificar o background image
            weatherContainer.style.backgroundImage = 'url("Sol.jpg")';
          } else if (temperatureCelsius < 15 && temperatureCelsius > -0) {
            // Se sim, modificar o background image
            weatherContainer.style.backgroundImage = 'url("Frio.jpeg")';
          } else if (temperatureCelsius > 15 || temperatureCelsius < 30) {
            // Se sim, modificar o background image
            weatherContainer.style.backgroundImage = 'url("temperatura.jpg")';
            } else {
            // Caso contrário, restaurar o background image padrão
            weatherContainer.style.backgroundImage = 'url("caminho/para/background/padrao.jpg")';
          }
        })
        .catch(error => {
          document.getElementById('loading').style.display = 'none';
          console.error('Erro ao obter dados da API:', error);
        });
    });
    