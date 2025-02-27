let inputBox = document.querySelector("#search-box");
let cityName = document.querySelector(".city-name");
let temperature = document.querySelector(".temperature");
let condition = document.querySelector(".condition");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let submitBtn = document.querySelector(".search-btn");
let apiKey = "ENTER YOUR_WEATHERAPI_KEY";

submitBtn.addEventListener("click", async () => {
  try {
    const city = inputBox.value;
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const weatherData = await response.json();
    cityName.textContent = `${weatherData.location.name}, ${weatherData.location.country} `;
    temperature.textContent = `${weatherData.current.temp_c}°C`;
    condition.textContent = weatherData.current.condition.text;
    wind.textContent = `${weatherData.current.wind_kph} km/h`;
    humidity.textContent = `${weatherData.current.humidity}%`;
    inputBox.value = "";
  } catch (error) {
    alert(
      "Failed to fetch weather data. Please check the city name and try again."
    );
  }
});
