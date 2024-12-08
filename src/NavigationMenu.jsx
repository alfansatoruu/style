import React, { useState } from 'react';
import './Navigation.css';

const NavigationMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="navigation">
      <div 
        className={`menuToggle ${isActive ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <div className="menu-content">
          <i className="fas fa-bars"></i>

        </div>
      </div>
      <div className={`menu ${isActive ? 'active' : ''}`}>
        <ul>
          <li style={{'--i': '0.1s'}}><a href="https://www.instagram.com/node_alvan/"><i className="fab fa-instagram"></i> Instagram</a></li>
          <li style={{'--i': '0.2s'}}><a href="#"><i className="fas fa-phone-alt"></i> Call</a></li>
          <li style={{'--i': '0.3s'}}><a href="https://www.universitasbumigora.ac.id/"><i className="fas fa-university"></i> University</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationMenu;