import './About.css';
import DropdownTab from './../DropdownTab/DropdownTab';

function About() {
  return (
    <div className="About-container">
      <div className="About-Jumbotron"></div>
      <div className="About-card">
        <div className="card-part-one">
          <h1 className="partOne-title">Cozy loft on the Canal Saint-Martin</h1>
          <span className="partOne-span">Paris, Île-de-France</span>
          <div className="=partOne-buttonContainer">
            <button className="card-button">Cozy</button>
            <button className="card-button">Canal</button>
            <button className="card-button">Paris 10</button>
          </div>
          <div className="partOne-description"></div>
        </div>
        <div className="card-part-two">
          <DropdownTab />
        </div>
      </div>
    </div>
  );
}

export default About;
