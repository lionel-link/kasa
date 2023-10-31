import './House.css';
import Carrousel from '../Carrousel/Carrousel';
import starActive from '../../assets/img/star-active.png';
import starInactive from '../../assets/img/star-inactive.png';
import DropdownTab from './../DropdownTab/DropdownTab';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Error404 from '../Error404/Error404'

function House() {
  const { id } = useParams();
  const [house, setHouse] = useState();
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   fetch('/data/data.json')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const house = data.find((house) => house.id === id);
  //       setHouse(house);
  //       dropdownTabDetail = {title:'équipement', content:house.equipements}
  //     });
  // }, [id]);

  useEffect(() => {
    const getHouse = async () => {
      const response = await fetch('/data/data.json');
      const data = await response.json();
      const house = data.find((house) => house.id === id);
      if (!house) {
        setError(true);
      } else {
        setHouse(house);
      }
    };
    getHouse();
  }, [id]);

  if (error) {
    return <Error404/>;
  }
  if (!house) {
    return <div>Loading ...</div>;
  }

  let ratingElements = [];
  for (let i = 0; i < 5; i++) {
    const imgSrc = i < house.rating ? starActive : starInactive;
    ratingElements.push(<img key={i} src={imgSrc} className="House__star" alt="star" />);
  }

  return (
    <div className="House">
      <div className="House__carrousel">
        <Carrousel gallery={house.pictures}/>
      </div>
      <div className="House__about">
        <div className="House__cardPartOne">
          <h1 className="House__cardPartOne__title">{house.title}</h1>
          <span className="House__cardPartOne__subTitle">{house.location}</span>
          <div className="House__cardPartOne__buttonContainer">
            {house.tags.map((tag) => (
              <button key={tag} className="House__cardPartOne__button">
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="House__cardPartTwo">
          <div className="House__cardPartTwo__hostContainer">
            <div className="House__cardPartTwo__hostName">{house.host.name}</div>
            <div className="House__cardPartTwo__hostImg">
              <img className='House__hostImg' src={house.host.picture} alt="pic de l'hôte" />
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
                <li>{equipment}</li>
              ))}
            </ul>
          </DropdownTab>
        </div>
      </div>
    </div>
  );
}

export default House;
