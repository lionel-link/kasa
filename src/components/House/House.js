import './House.css';
import DropdownTab from './../DropdownTab/DropdownTab';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function House() {
  FindHouse();
  const [houses, setHouses] = useState([]);
  const { id } = useParams();

  async function FindHouse() {
     useEffect(() => {
        fetch('/data/data.json')
          .then((response) => response.json())
          .then((data) => setHouses(data));
      }, []);
  }

   let house = houses.find((house) => house.id === id);

      //let equipment = house.equipments
      console.log(house);


  return (
    <div className="About-container">
      <div className="About-Jumbotron"></div>
      <div className="About-card">
        <div className="card-part-one">
          <h1 className="partOne-title">Cozy loft on the Canal Saint-Martin</h1>
          <span className="partOne-span">Paris, Île-de-France</span>
          <div className="=partOne-buttonContainer">
            <button className="card-button">Cozy</button>
            <button className="card-button">Canal</button>
            <button className="card-button">Paris 10</button>
          </div>
          <div className="partOne-description"></div>
        </div>
        <div className="card-part-two">
          <DropdownTab house={house} />
        </div>
      </div>
    </div>
  );
}

export default House;
