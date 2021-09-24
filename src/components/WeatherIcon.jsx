import { useEffect, useState } from "react";

function WeatherIcon({ state = "Showers" }) {
  const [src, setSrc] = useState("");
  const assetName = state.replace(/\s/g, "");

  useEffect(() => {
    import(`../assets/${assetName}.png`)
      .then((module) => setSrc(module.default))
      .catch((error) => console.error(error));
  }, [assetName]);

  return <img src={src} alt={state} className="weather-icon" />;
}

export default WeatherIcon;
