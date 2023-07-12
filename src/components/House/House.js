import './House.css';
import Carrousel from '../../assets/img/house-carrousel.jpg';
import HostPhoto from '../../assets/img/host.png';
import starActive from '../../assets/img/star-active.png';
import starInactive from '../../assets/img/star-inactive.png';
import DropdownTab from './../DropdownTab/DropdownTab';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function House() {
  const { id } = useParams();
  const [house, setHouse] = useState();

  useEffect(() => {
    const getHouse = async () => {
      const response = await fetch('/data/data.json');
      const data = await response.json();
      const house = data.find((house) => house.id === id);

      setHouse(house);
    };
    getHouse();
  }, [id]);

  if (!house) {
    return null;
  }

  let ratingElements = [];
  for (let i = 0; i < 5; i++) {
    if (i < house.rating) {
      ratingElements.push(
        <img key={i} src={starActive} className="House__star" alt="star" />
      );
    } else {
      ratingElements.push(
        <img key={i} src={starInactive} className="House__star" alt="star" />
      );
    }
  }

  return (
    <div className="House">
      <div className="House__carrousel">
        <img src={Carrousel} alt="" />
      </div>
      <div className="House__about">
        <div className="House__cardPartOne">
          <h1 className="House__cardPartOne__title">{house.title}</h1>
          <span className="House__cardPartOne__subTitle">{house.location}</span>
          <div className="House__cardPartOne__buttonContainer">
            {house.tags.map((tag) => (
              <span key={tag} className="House__cardPartOne__button">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="House__cardPartTwo">
          <div className="House__cardPartTwo__hostContainer">
            <div className="House__cardPartTwo__hostName">Alexandre Dumas</div>
            <div className="House__cardPartTwo__hostImg">
              <img src={HostPhoto} alt="pic de l'hôte" />
            </div>
          </div>
          <div className="House__cardPartTwo__rating">{ratingElements}</div>
        </div>
      </div>
      <div className="House__DropdownTabContainer">
        <div className="House__DropdownTab">
          <DropdownTab title="Description">{house.description}</DropdownTab>
        </div>
        <div className="House__DropdownTab">
          <DropdownTab title="Équipements">
            <ul>
              {house.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          </DropdownTab>
        </div>
      </div>
    </div>
  );
}

export default House;
