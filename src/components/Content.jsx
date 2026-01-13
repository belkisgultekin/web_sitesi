import { useState, useEffect } from "react";

const Content = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Arka plan sınıfı
  const getBackgroundClass = () => {
    if (!weather) return "default";
    if (weather.temperature <= 5) return "snow";
    if (weather.temperature <= 15) return "rain";
    return "clear";
  };

  // 🔹 Hava durumu ikonu
  const getWeatherIcon = () => {
    if (!weather) return "";
    if (weather.temperature <= 5) return "❄️";
    if (weather.temperature <= 15) return "🌧️";
    return "☀️";
  };

  // ❄🌧☀ DİNAMİK EFEKTLER
  useEffect(() => {
    const container = document.getElementById("effects");
    if (!container) return;

    container.innerHTML = "";

    if (!weather) return;

    // ❄ KAR
    if (weather.temperature <= 5) {
      for (let i = 0; i < 40; i++) {
        const el = document.createElement("div");
        el.className = "snowflake";
        el.innerText = "❄";
        el.style.left = Math.random() * 100 + "vw";
        el.style.animationDuration = 5 + Math.random() * 5 + "s";
        el.style.fontSize = 10 + Math.random() * 20 + "px";
        container.appendChild(el);
      }
    }

    // 🌧 YAĞMUR
    else if (weather.temperature <= 15) {
      for (let i = 0; i < 60; i++) {
        const el = document.createElement("div");
        el.className = "raindrop";
        el.style.left = Math.random() * 100 + "vw";
        el.style.animationDuration = 1 + Math.random() + "s";
        container.appendChild(el);
      }
    }

    // ☀ GÜNEŞ
    else {
      const sun = document.createElement("div");
      sun.className = "sun";
      sun.innerText = "☀";
      container.appendChild(sun);
    }
  }, [weather]);

  const getWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=tr&format=json`
      );
      const geoData = await geoRes.json();

      if (!geoData.results) {
        throw new Error("Şehir bulunamadı");
      }

      const { latitude, longitude, name } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        city: name,
        temperature: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed,
      });
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className={`content ${getBackgroundClass()}`}>
      {/* 🌦 Efekt katmanı */}
      <div id="effects"></div>

      <input
        type="text"
        placeholder="Şehir adı giriniz"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Getir</button>

      {loading && <p>Yükleniyor...</p>}
      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="card">
          <div className="weather-icon">{getWeatherIcon()}</div>
          <h2>{weather.city}</h2>
          <p>Sıcaklık: {weather.temperature} °C</p>
          <p>Rüzgar: {weather.wind} km/s</p>
        </div>
      )}
    </div>
  );
};

export default Content;
