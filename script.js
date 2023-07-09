// Weather data for different cities in Pakistan
const weatherData = [
    // Punjab
    {
        city: "Punjab",
        temperature: "30°C",
        description: "Partly Cloudy",
        humidity: "65%",
        windSpeed: "12 km/h"
    },
    // Karachi
    {
        city: "Karachi",
        temperature: "32°C",
        description: "Sunny",
        humidity: "60%",
        windSpeed: "10 km/h"
    },
    // Lahore
    {
        city: "Lahore",
        temperature: "28°C",
        description: "Cloudy",
        humidity: "70%",
        windSpeed: "15 km/h"
    },
    // Balochistan
    {
        city: "Quetta",
        temperature: "25°C",
        description: "Sunny",
        humidity: "55%",
        windSpeed: "8 km/h"
    },
    // KPK
    {
        city: "Peshawar",
        temperature: "27°C",
        description: "Clear",
        humidity: "62%",
        windSpeed: "10 km/h"
    },
    // Islamabad
    {
        city: "Islamabad",
        temperature: "26°C",
        description: "Partly Cloudy",
        humidity: "68%",
        windSpeed: "13 km/h"
    }
];

// Function to display weather data for a specific city
function displayWeather(city) {
    const weatherCard = document.getElementById("weather-card");
    const locationElement = document.getElementById("location");
    const temperatureElement = document.getElementById("temperature");
    const descriptionElement = document.getElementById("description");
    const humidityElement = document.getElementById("humidity");
    const windSpeedElement = document.getElementById("wind-speed");

    // Find the weather data for the specified city
    const weatherInfo = weatherData.find(weather => weather.city.toLowerCase() === city.toLowerCase());

    if (weatherInfo) {
        locationElement.textContent = city;
        temperatureElement.textContent = "Temperature: " + weatherInfo.temperature;
        descriptionElement.textContent = "Description: " + weatherInfo.description;
        humidityElement.textContent = "Humidity: " + weatherInfo.humidity;
        windSpeedElement.textContent = "Wind Speed: " + weatherInfo.windSpeed;
        weatherCard.style.display = "block";
    } else {
        locationElement.textContent = "Location Not Found";
        weatherCard.style.display = "none";
    }
}

// Function to handle button click and get weather data
function getWeather() {
    const locationInput = document.getElementById("location-input");
    const city = locationInput.value;

    displayWeather(city);

    // Clear the input field
    locationInput.value = "";
}
