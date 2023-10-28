import { useState } from 'react';
import './DropdownTab.css';
import ArrowTop from './../../assets/img/arrow-top.png';

function DropdownTab({ title, children }) {
  const [open, setOpen] = useState(false);

  function handleToggle(event) {
    event.preventDefault();
    setOpen(!open);
  }

  // if (tab.equipments) {
  //    content = house.equipments;
  //    header = 'équipements';
  // } else {
  //   content = house.text;
  //    header = house.header;
  // }

  return (
    <div className={`DropdownTab ${open ? 'DropdownTab--open' : ''}`}>
      {/* eslint-disable-next-line */}
      <a href="#" className="DropdownTab__header " onClick={handleToggle}>
        <span>{title}</span>
        <img src={ArrowTop} alt="" />
      </a>
      <div className="DropdownTab__content">{children}</div>
    </div>
  );
}

export default DropdownTab;
