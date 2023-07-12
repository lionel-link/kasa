import './About.css';
import Jumbotron from './../../assets/img/about-jumbotron.jpg';
import DropdownTab from './../DropdownTab/DropdownTab';

const fiability = {header:'Fiabilité', body:"Fiabilité Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."}
const respect = {header:'Respect', body:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}
const service = {header:'Service', body:"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}
const security = {header:'Sécurité', body:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}

function About() {
  return (
    <div className="About">
      <div className="About-Jumbotron"><img src={Jumbotron} alt=''/></div>
      <div className="About-container">
          <DropdownTab tab = {fiability}/>
          <DropdownTab tab = {respect}/>
          <DropdownTab tab = {service}/>
          <DropdownTab tab = {security}/>
      </div>
    </div>
  );
}

export default About;
