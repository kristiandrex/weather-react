export function formatCity(city) {
  return {
    days: city.consolidated_weather.map(formatDay),
    date: city.time,
    name: city.title,
    woeid: city.woeid
  };
}

function formatDay(day) {
  const { id, applicable_date, weather_state_name, the_temp, ...others } = day;

  return {
    id,
    date: applicable_date,
    weather: weather_state_name,
    temp: the_temp,
    ...others
  };
}

export function formatDate(time) {
  const date = new Date(time);

  return new Intl.DateTimeFormat("en", {
    weekday: "short",
    day: "numeric",
    month: "short"
  }).format(date);
}

// Using cors-anywhere to avoid CORS errors.
// https://github.com/kristiandrex/cors-anywhere
export const API_URL = "https://kristiandrex-cors-anywhere.herokuapp.com/https://www.metaweather.com/api";
