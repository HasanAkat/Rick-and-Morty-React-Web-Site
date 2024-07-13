import React from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../../images/logo.png';
import './Navbar.css'; 

// Navbar bileþeni, navigasyon çubuðunu oluþturur
const Navbar = () => {
  const location = useLocation();

  // isActive fonksiyonu, geçerli sayfanýn yolunu kontrol ederek aktif sýnýfý ekler
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg bg-transparent border-0 shadow-none mb-5 justify-content-end" data-bs-theme="dark">
      <div className="container-fluid">
        {/* Anasayfa baðlantýsý */}
        <Link className="navbar-brand" to="/Rick-and-Morty-React-Web-Site">
          <img src={logo} alt="Logo" className="logo"/>
        </Link>
        {/* Mobil görünümde navbar'ý açýp kapatmak için buton */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar linkleri */}
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item" style={{ marginRight: '20px' }}>
              {/* Characters sayfasý baðlantýsý */}
              <Link to='/Rick-and-Morty-React-Web-Site' className={`nav-link ${isActive('/Rick-and-Morty-React-Web-Site')}`}>
                Characters
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: '20px' }}>
              {/* Episodes sayfasý baðlantýsý */}
              <Link to='/episodes' className={`nav-link ${isActive('/episodes')}`}>
                Episodes
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: '20px' }}>
              {/* Locations sayfasý baðlantýsý */}
              <Link to='/locations' className={`nav-link ${isActive('/locations')}`}>
                Locations
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: '20px' }}>
              {/* Favorites sayfasý baðlantýsý */}
              <Link to='/favorites' className={`nav-link ${isActive('/favorites')}`}>
                Favorites
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
