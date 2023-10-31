import './Header.css';
import Menu from './../Menu/Menu.js';
import logo from './../../logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="Header">
        <div className="Header__Container">
        <Link to="/"><img className="Header__logo" src={logo} alt="" /></Link>
        </div>
        <Menu />
      </header>
    )
}

export default Header;