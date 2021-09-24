import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import { formatDate } from "@/helpers";

function Day({ day, index }) {
  return (
    <div className="day">
      <span className="date">
        {index === 0 ? "Tomorrow" : formatDate(day.date)}
      </span>
      <WeatherIcon state={day.weather} />
      <Temperature value={day.max_temp} />
      <Temperature value={day.min_temp} />
    </div>
  );
}

export default Day;
