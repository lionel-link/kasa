import './Footer.css';
import LogoDeclined from './../../assets/img/logo-declined.png';


function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__logo">
        <img src={LogoDeclined} alt="" />
      </div>
      <div className="Footer__copyright">© 2020 Kasa. All rights reserved</div>
    </div>
  );
}

export default Footer;
