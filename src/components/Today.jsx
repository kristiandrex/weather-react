import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import { formatDate } from "@/helpers";

function Today({ city, isCelsius }) {
  const today = city.days[0];

  return (
    <main>
      <div className="container">
        <div className="buttons">
          <button>Search for places</button>
          <button className="location">
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
