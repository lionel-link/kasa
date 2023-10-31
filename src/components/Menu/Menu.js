import { useEffect, useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  const [selected, setSelected] = useState(true);

  const location = window.location.pathname

  useEffect(() =>{
    if( location === '/about'){
      setSelected(false);
    }else{
      setSelected(true);
    }
  });

  return (
    <div className="Menu">
      <ul className="Menu__navbar">
        <li className="Menu__navbarLi">
          <Link className={`Menu__navbarLink ${selected ? 'selected' : ''}`}  to="/" >
            Accueil
          </Link>
        </li>
        <li className="Menu__navbarLi">
          <Link className={`Menu__navbarLink ${selected ? '' : 'selected'}`} to="/about">
            A Propos
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
