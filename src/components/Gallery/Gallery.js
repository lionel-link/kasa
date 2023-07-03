import './Gallery.css';
import { Link } from 'react-router-dom';
import House from './../House/House';

function Gallery({ houses }) {
  const arrayDataItems = houses.map((house) => (
    <Link key={house.id} to={`/house-detail/${house.id}`}>
      <div className="Gallery-card">
        <img className="Gallery-cardImg" src={house.cover} alt="" />
        <div className="Gallery-cardTitle">{house.title}</div>
      </div>
    </Link>
  ));

  return <div className="Gallery-container">{arrayDataItems}</div>;
}

export default Gallery;
