import React, {useState} from 'react';
import './BurgerMenu.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { NavLink } from 'react-router-dom';
import { ABOUT_ROUTE, CONTACT_ROUTE, MAIN_ROUTE, SERVICE_ROUTE } from '../../util/consts';
const BurgerMenu = () => {
    const options = 
        {
          name: 'Enable body scrolling',
          scroll: true,
          backdrop: false,
        }
      ;
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const openMenu = () => {
        return !open ? setOpen(true) : setOpen(false);
      }
      const [show, setShow] = useState(false);

      const toggleShow = () => setShow((s) => !s);
    return (
        <div className=''>
            <div 
            className={`me-3 burgerMenu ${open ? 'open' : ''}`}
            onClick={openMenu} 
            >
                <span></span>
            </div>

 
      <Offcanvas show={open} className='menu_box' onHide={handleClose} {...options}>
        <Offcanvas.Body className='menu_items_box p-0'>
            <div className='menu_item'>
                <NavLink className='menu_item_text text-decoration-none' to={MAIN_ROUTE}>Главная</NavLink>
            </div>
            <div className='menu_item'>
                <NavLink className='menu_item_text text-decoration-none' to={ABOUT_ROUTE}>О нас</NavLink>
            </div>
            <div className='menu_item'>
                <NavLink className='menu_item_text text-decoration-none' to={SERVICE_ROUTE}>Услуги</NavLink>
            </div>
            <div className='menu_item'>
                <NavLink className='menu_item_text text-decoration-none' to={CONTACT_ROUTE}>Контакты</NavLink>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    );
};

export default BurgerMenu;