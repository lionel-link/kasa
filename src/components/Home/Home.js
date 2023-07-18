import './Home.css';
//import { Link } from 'react-router-dom';
import Gallery from './../Gallery/Gallery.js';
import { useEffect, useState } from 'react';
//import axios from 'axios';

function Home(children) {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then((response) => response.json())
      .then((data) => setHouses(data));
    // axios.get('/data/data.json')
    // .then((response) => {setHouses(response.data)})
    // .catch((error) => {console.log(error)});
  }, []);

  return (
    <div className="Home">
      <div className="Home__jumbotron">
        <div className="Home__jumbotronText">Chez vous, partout et ailleurs</div>
      </div>
      <Gallery houses={houses} />
    </div>
  );
}

export default Home;
