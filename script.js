const apiKey = "YOUR_API_KEY_HERE";

const button = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const result = document.getElementById("weatherResult");

button.addEventListener("click", () => {
  const city = cityInput.value;

  if (city === "") {
    result.innerHTML = "Please enter a city name";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        result.innerHTML = "City not found ❌";
      } else {
        result.innerHTML = `
          <h3>${data.name}</h3>
          <p>🌡️ Temperature: ${data.main.temp} °C</p>
          <p>☁️ Weather: ${data.weather[0].description}</p>
        `;
      }
    })
    .catch(() => {
      result.innerHTML = "Error fetching data";
    });
});
