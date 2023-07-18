import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="Menu">
      <ul className="Menu__navbar">
        <li className="Menu__navbarLi">
          <Link className="Menu__navbarLink" to="/">
            Accueil
          </Link>
        </li>
        <li className="Menu__navbarLi">
          <Link className="Menu__navbarLink" to="/about">
            A Propos
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
