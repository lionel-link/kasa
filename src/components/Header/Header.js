import './Header.css';
import Menu from './../Menu/Menu.js';
import logo from './../../logo.png';

function Header() {
    return (
        <header className="Header">
        <div className="Header__Container">
          <img className="Header__logo" src={logo} alt="" />
        </div>
        <Menu />
      </header>
    )
}

export default Header;