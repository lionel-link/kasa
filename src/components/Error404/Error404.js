import './Error404.css';

function Error404() {
  return (
    <div className="Error404">
      <div className="Error404__title">404</div>
      <div className="Error404__subtitle">Oups! La page que vous demandez n'existe pas.</div>
      <div className="Error404__homepage">
        <a className="Error404__homepageLink" href="/">Retourner sur la page d’accueil</a>
      </div>
    </div>
  );
}

export default Error404;
