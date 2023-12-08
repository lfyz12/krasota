import React from 'react';
import TelegramIcon from './TelegramIcon';
import Vk from './Vk';
import './footer.css'
const Footer = () => {
    return (
        <div className='footer'>

            <div className='text_section'>
                <span className='phone'>+79777777777</span>
                <span className='email'>example@gmail.com</span>
            </div>
            <div className='icon_section'>
                <TelegramIcon/>
                <Vk/>
            </div>
        </div>
    );
};

export default Footer;