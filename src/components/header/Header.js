import React, { useState, useEffect } from 'react';
import BurgerMenu from './BurgerMenu';
import { NavLink } from 'react-router-dom';
import { ABOUT_ROUTE, CONTACT_ROUTE, MAIN_ROUTE, SERVICE_ROUTE } from '../../util/consts';
const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = (event) => {
          setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      })
    return (
        
        <nav className='main_nav'>
        <div className='nav_content'>
          {width <= 999 && <BurgerMenu/>}
          <div className='logo_box'>
          </div>
          {width > 999 && <div className='nav_items_box'>
            <NavLink className='nav_item text-decoration-none' to={MAIN_ROUTE}>Главная</NavLink>
            <NavLink className='nav_item text-decoration-none' to={ABOUT_ROUTE}>О нас</NavLink>
            <NavLink className='nav_item text-decoration-none' to={SERVICE_ROUTE}>Услуги</NavLink>
            <NavLink className='nav_item text-decoration-none' to={CONTACT_ROUTE}>Контакты</NavLink>
          </div>}
        </div>
      </nav>
    );
};

export default Header;