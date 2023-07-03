import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="Menu-nav">
      <ul className="Menu-navMenu">
        <li className="Menu-li">
          <Link className="Menu-link" to="/">
            Accueil
          </Link>
        </li>
        <li className="Menu-li">
          <Link className="Menu-link" to="/about">
            A Propos
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
