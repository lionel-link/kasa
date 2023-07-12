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
  const [house, setHouse] = useState({});
  const [dropdownTabEquipement, setDropdownTabEquipement] = useState({});
  const [dropdownTabDescription, setDropdownTabDescription] = useState({});
  const [tags, seTags] = useState([]);
  const [rating, setRating] = useState([]);

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
      setHouse(house);
      const equipmentHTML = house.equipments.map((equipment) => <li>{equipment}</li>);
      setDropdownTabEquipement({ header: 'Équipements', body: equipmentHTML });
      setDropdownTabDescription({ header: 'Description', body: house.description });
      let tagsHTML = house.tags.map((tag) => (
        <button key={tag} className="House__cardPartOne__button">
          {tag}
        </button>
      ));
      seTags(tagsHTML);
      let ratingHTML = [];
      for (let i = 0; i < 5; i++) {
        if (i < house.rating) {
          ratingHTML.push(<img key={i} src={starActive} className="House__star" alt="star" />);
        } else {
          ratingHTML.push(<img key={i} src={starInactive} className="House__star" alt="star" />);
        }
      }
      console.log(ratingHTML);
      setRating(ratingHTML);
    };
    getHouse();
  }, [id]);

  return (
    <div className="House">
      <div className="House__carrousel">
        <img src={Carrousel} alt="" />
      </div>
      <div className="House__about">
        <div className="House__cardPartOne">
          <h1 className="House__cardPartOne__title">{house.title}</h1>
          <span className="House__cardPartOne__subTitle">{house.location}</span>
          <div className="House__cardPartOne__buttonContainer">{tags}</div>
        </div>
        <div className="House__cardPartTwo">
          <div className="House__cardPartTwo__hostContainer">
            <div className="House__cardPartTwo__hostName">Alexandre Dumas</div>
            <div className="House__cardPartTwo__hostImg">
              <img src={HostPhoto} alt="pic de l'hôte" />
            </div>
          </div>
          <div className="House__cardPartTwo__rating">{rating}</div>
        </div>
      </div>
      <div className="House__DropdownTabContainer">
        <div className="House__DropdownTab">
          <DropdownTab tab={dropdownTabDescription} />
        </div>
        <div className="House__DropdownTab">
          <DropdownTab tab={dropdownTabEquipement} />
        </div>
      </div>
    </div>
  );
}

export default House;
