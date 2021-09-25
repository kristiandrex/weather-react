import { useState } from "react";
import { createPortal } from "react-dom";
import { API_URL } from "@/helpers";
import "@/styles/Search.css";

function Search({ show, setWoeid, setShowSearch }) {
  const [locations, setLocations] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    const location = event.target.location.value;

    fetch(`${API_URL}/location/search/?query=${location}`)
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.error(error));
  };

  const handleClick = (event) => {
    if (event.target.tagName === "LI") {
      setWoeid(event.target.id);
      handleClose();
    }
  };

  const handleClose = () => {
    setShowSearch(false);
    setLocations([]);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="search">
      <div className="btn-close">
        <button onClick={handleClose}>
          <span className="material-icons">close</span>
        </button>
      </div>
      <form onSubmit={handleSearch}>
        <div className="field">
          <span className="material-icons">search</span>
          <input type="text" name="location" placeholder="Location" />
        </div>
        <button>Search</button>
      </form>
      <ul className="locations" onClick={handleClick}>
        {locations.map((location) => (
          <li
            key={location.woeid}
            id={location.woeid}
            className="location"
            tabIndex="0"
          >
            {location.title}{" "}
            <span className="material-icons">navigate_next</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SearchPortal({ show, setWoeid, setShowSearch }) {
  return createPortal(
    <Search show={show} setWoeid={setWoeid} setShowSearch={setShowSearch} />,
    document.getElementById("search-root")
  );
}

export default SearchPortal;
