import {useState} from "react";
import './DropdownTab.css';
import ArrowTop from './../../assets/img/arrow-top.png';

function DropdownTab({house}) {
   console.log(house)
    // const [title, text] = options;
    const [open, setOpen] = useState(true);
    function handleToggle (event) {
        event.preventDefault();
        setOpen(!open)
    }
    

  return (
    <div className={`DropdownTab ${open ? "DropdownTab--open" : ""}`}>
        {/* eslint-disable-next-line */} 
      <a href="#" className="DropdownTab__header " onClick={handleToggle}>
        <span></span>
        <img src={ArrowTop} alt="" />
      </a>
      <div className="DropdownTab__content">
        {/* {house.equipments[0]} */}
      </div>
    </div>
  );
}


export default DropdownTab;
