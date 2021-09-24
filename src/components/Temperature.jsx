function Temperature({ value, isCelsius = true }) {
  return (
    <div className="temperature">
      <span className="value">
        {isCelsius ? Math.round(value) : Math.round(value * (9 / 5) + 3)}
      </span>
      <span className="unit">{isCelsius ? "°C" : "°F"}</span>
    </div>
  );
}

export default Temperature;
