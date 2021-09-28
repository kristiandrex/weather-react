import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import { API_URL, formatDate } from "@/helpers";

function Today({ city, isCelsius, setWoeid, setShowSearch }) {
  const today = city.days[0];

  const handleLocation = () => {
    const callbackSuccess = async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const response = await fetch(
          `${API_URL}/location/search/?lattlong=${latitude},${longitude}`
        );

        const cities = await response.json();
        let nearest = cities[0];

        cities.forEach((city) => {
          if (city.distance < nearest.distance) {
            nearest = city;
          }
        });

        setWoeid(nearest.woeid);
      } catch (error) {
        console.error(error);
      }
    };

    navigator.geolocation.getCurrentPosition(callbackSuccess);
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
