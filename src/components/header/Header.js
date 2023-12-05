import React, { useState, useEffect } from 'react';
import BurgerMenu from './BurgerMenu';
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
            <span className='nav_item'>Главная</span>
            <span className='nav_item'>О нас</span>
            <span className='nav_item'>Услуги</span>
            <span className='nav_item'>Контакты</span>
          </div>}
        </div>
      </nav>
    );
};

export default Header;