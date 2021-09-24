import Day from "./Day";
import "@/styles/Details.css";

function Details({ city }) {
  const today = city.days[0];
  const nextDays = city.days.slice(1);

  return (
    <section className="details">
      <div className="days">
        {nextDays.map((day, index) => (
          <Day key={day.id} day={day} index={index} />
        ))}
      </div>
      <div className="hightlights">
        <h1>Today’s Hightlights</h1>
        <div className="cards">
          <div className="card wind">
            <span className="title">Wind status</span>
            <div className="measure">
              <span className="value">{Math.round(today.wind_speed)}</span>
              <span className="unit">mph</span>
            </div>
            <span
              className="material-icons wind-icon"
              style={{ transform: `rotate(${today.wind_direction}deg)` }}
            >
              navigation
            </span>
            <span className="wind-direction">
              {today.wind_direction_compass}
            </span>
          </div>
          <div className="card humidity">
            <span className="title">Humidity</span>
            <div className="measure">
              <span className="value">{Math.round(today.humidity)}</span>
              <span className="unit">%</span>
            </div>
            <div className="humidity-indicator">
              <div className="numbers">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
              <div className="bar">
                <div
                  className="bar-inner"
                  style={{ width: `${today.humidity}%` }}
                ></div>
              </div>
              <span className="unit">%</span>
            </div>
          </div>
          <div className="card">
            <span className="title">Visibility</span>
            <div className="measure">
              <span className="value">{Math.round(today.visibility)}</span>
              <span className="unit"> miles</span>
            </div>
          </div>
          <div className="card">
            <span className="title">Air Pressure</span>
            <div className="measure">
              <span className="value">{Math.round(today.air_pressure)}</span>
              <span className="unit"> mb</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
