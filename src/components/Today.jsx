import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import { API_URL, formatDate } from "@/helpers";

function Today({ city, isCelsius, setWoeid, setShowSearch }) {
  const today = city.days[0];

  const handleLocation = () => {
    const success = (position) => {
      const { latitude, longitude } = position.coords;

      fetch(`${API_URL}/location/search/?lattlong=${latitude},${longitude}`)
        .then((response) => response.json())
        .then((cities) => {
          let nearest;

          cities.forEach((city) => {
            if (!nearest || city.distance < nearest.distance) {
              nearest = city;
            }
          });

          setWoeid(nearest.woeid);
        })
        .catch((error) => console.error(error));
    };

    navigator.geolocation.getCurrentPosition(success);
  };

  return (
    <main>
      <div className="container">
        <div className="buttons">
          <button onClick={() => setShowSearch(true)}>Search for places</button>
          <button className="location" onClick={handleLocation}>
            <span className="material-icons">my_location</span>
          </button>
        </div>
        <WeatherIcon state={today.weather} />
        <Temperature value={today.temp} isCelsius={isCelsius} />
        <div className="weather-state">{today.weather}</div>
        <div className="date">Today • {formatDate(today.date)}</div>
        <div className="place">
          <span className="material-icons">place</span>
          <span className="name">{city.name}</span>
        </div>
      </div>
    </main>
  );
}

export default Today;
