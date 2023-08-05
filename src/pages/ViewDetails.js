import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ViewDetails.css";
import { FETCH_ALBUM_URL } from "../contants";

function ViewDetail() {
  const { id } = useParams();
  const [album, setAlbum] = useState([]);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("useEffect");
    dataFetching();
  }, []);
  useEffect(() => {
    if (load === true) {
      navigate(-1);
    }
  }, [load]);
  
  async function dataFetching() {
    const response = await fetch(FETCH_ALBUM_URL);
    const data = await response.json();
    console.log(data);
    const value = data.filter((item, index) => {
      if (index > 50) {
        return;
      }
      if (item.id === parseInt(id)) {
        return item;
      }
    });
    console.log(value.length);
    setAlbum(value);
    if (value.length === 0) {
      setLoad(true);
    }
  }
  console.log(id);

  return (
    <div className="album-card">
      <h1 className="album-title">{album[0]?.title}</h1>
      <img className="album-image" src={album[0]?.url} alt="img" />
    </div>
  );
}

export default ViewDetail;
