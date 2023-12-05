import React from 'react';
import pic from '../../assets/about-pic.jpg'
import './aboutPage.css'
const AboutSection = () => {
    return (
        <div className='about_page'> 
            <div className='about_image_box'>
                <img
                className='about_image'
                src={pic} alt='картика'/>
            </div>
            <div className='about_content_box'>
                <div className='about_content_wrapper'>
                    <div className='about_content_title_box'>
                        <span className='about_content_title'>Почему наши клиенты</span> <br/>
                        <span className='tire_line'></span><span className='about_content_title ms-5'>Выбирают нас</span>
                    </div>
                    <div className='about_content_text'>
                    Мы являемся ведущим салоном красоты в Лос-Анджелесе, предоставляющим высококачественные парикмахерские услуги,
                     услуги по макияжу и уходу за кожей для всех желающих.
                    </div>
                    <div className='about_content_discription'>
                    Наши клиенты ценят наш уровень обслуживания клиентов, навыки наших стилистов и косметологов,
                     а также наш профессиональный подход ко всему, что мы делаем.
                    </div>
                </div>
        


            </div>
        </div>
    );
};

export default AboutSection;