import './Gallery.css';
import { Link } from 'react-router-dom';

function Gallery({ houses }) {
  const arrayDataItems = houses.map((house) => (
    <Link className="Gallery-card" key={house.id} to={`/house-detail/${house.id}`}>
        <img className="Gallery-cardImg" src={house.cover} alt="" />
        <div className="Gallery-cardTitle">{house.title}</div>
    </Link>
  ));

  return <div className="Gallery">{arrayDataItems}</div>;
}

export default Gallery;
