import { useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Loading from "./components/Loading";
import Today from "./components/Today";
import Details from "./components/Details";
import { API_URL, formatCity } from "./helpers";
import "./styles/App.css";

function App() {
  const [woeid, setWoeid] = useLocalStorage("woeid", 565346); // Default city: Helsinki
  const [city, setCity] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(`${API_URL}/location/${woeid}`)
      .then((response) => response.json())
      .then((data) => {
        setCity(formatCity(data));
        setStatus("success");
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      });
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
      <Today city={city} setWoeid={setWoeid} />
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
