import { useState, useEffect } from "react";
import "./Body.css";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { FETCH_ALBUM_URL } from "../contants";

const Body = () => {
  const [album, setAlbum] = useState([]);
  const [filterAlbum, setFilterAlbum] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.log("useEffect");
    dataFetching();
  }, []);

  async function dataFetching() {
    const response = await fetch(FETCH_ALBUM_URL);
    const data = await response.json();
    console.log(data);
    setAlbum(data);
    setFilterAlbum(data);
  }
  const Filter = (text, album) => {
    const newData = album.filter((item) => {
      return item?.title.toLowerCase().match(text.toLowerCase());
    });
    setFilterAlbum(newData);
  };

  return album.length === 0 ? <Shimmer /> :(
    <>
      <div className="container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
        />
        <button
          className="search-button"
          onClick={() => Filter(searchText, album)}
        >
          Search
        </button>
      </div>
      <div className="album-container">
        {filterAlbum.length === 0 ? (
            <div className="no-results">
            <h1>No Results Found!</h1>
            <p>Sorry, we couldn't find any matching albums for your search.</p>
          </div>
        ) : (
          filterAlbum.map((item, index) => {
            if (index > 50) {
              return null;
            }
            return (
              <div className="album-card" key={item.id}>
                <Link to={`/view-detail/${item.id}`}><img className="album-img" src={item.url} alt="img" /></Link>
                <h2 className="album-title">{item.title}</h2>

              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;