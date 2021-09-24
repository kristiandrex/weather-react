import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Today from "./components/Today";
import Details from "./components/Details";
import { formatCity } from "./helpers";
import "./styles/App.css";

function App() {
  // Default city: Helsinki
  const [woeid] = useState(565346);
  const [city, setCity] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    // Using cors-anywhere to avoid CORS errors.
    // https://github.com/kristiandrex/cors-anywhere
    fetch(
      `https://kristiandrex-cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCity(formatCity(data));
        setStatus("success");
      })
      .catch((error) => console.error(error));
  }, [woeid]);

  if (status === "loading") {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      <Today city={city} />
      <Details city={city} />
      <footer>
        Created by{" "}
        <a
          href="https://github.com/kristiandrex"
          target="_blank"
          rel="noreferrer"
        >
          @kristiandrex
        </a>{" "}
        - devChallenges.io
      </footer>
    </>
  );
}

export default App;
