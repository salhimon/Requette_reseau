// API Key et URL de base
const apiKey = "ecad1eca8a8986619c7c0a805be17030"; // Remplacez par votre clé API OpenWeatherMap
const apiBase = "https://api.openweathermap.org/data/2.5/weather";

// Gestionnaire d'événement pour le bouton
document.getElementById('get-weather-btn').addEventListener('click', () => {
  const city = document.getElementById('city-input').value;
  if (city) {
    getWeather(city);
  } else {
    alert("Veuillez entrer une ville !");
  }
});

// Fonction pour récupérer les données météo
async function getWeather(city) {
  try {
    const response = await fetch(`${apiBase}?q=${city}&appid=${apiKey}&units=metric&lang=fr`);
    if (!response.ok) {
      throw new Error("Ville introuvable");
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

// Fonction pour afficher les données météo
function displayWeather(data) {
  const weatherInfo = document.getElementById('weather-info');
  weatherInfo.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Température : ${data.main.temp}°C</p>
    <p>Météo : ${data.weather[0].description}</p>
    <p>Humidité : ${data.main.humidity}%</p>
  `;
}
