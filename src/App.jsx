import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Search from "./components/Search";
import Today from "./components/Today";
import Details from "./components/Details";
import useLocalStorage from "./hooks/useLocalStorage";
import { API_URL, formatCity } from "./helpers";
import "./styles/App.css";

function App() {
  const [woeid, setWoeid] = useLocalStorage("woeid", 565346); // Default city: Helsinki
  const [showSearch, setShowSearch] = useState(false);
  const [status, setStatus] = useState("loading");
  const [city, setCity] = useState(null);

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
      <Search
        show={showSearch}
        setWoeid={setWoeid}
        setShowSearch={setShowSearch}
      />
      <Today city={city} setWoeid={setWoeid} setShowSearch={setShowSearch} />
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
