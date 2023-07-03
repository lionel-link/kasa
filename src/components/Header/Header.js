import './Header.css';
import Menu from './../Menu/Menu.js';
import logo from './../../logo.png';

function Header() {
    return (
        <header className="Menu-header">
        <div className="Menu-LogoConatainer">
          <img src={logo} className="logo" alt="" />
        </div>
        <Menu />
      </header>
    )
}

export default Header;