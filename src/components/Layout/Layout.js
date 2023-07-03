import './Layout.css';
import Header from './../Header/Header.js';

function Layout({children}) {
  return (
    <div className="Layout-container">
      <Header />
      <main className="Home-main">{children}</main>
    </div>
  );
}

export default Layout;
