import React, { useState } from 'react';
import pic1 from '../../assets/about-1.jpg';
import pic2 from '../../assets/about-2.jpg';
import natasha from '../../assets/Natasha.jpg'
import valya from '../../assets/valya.jpg'
import tanya from '../../assets/tanya.jpg'
import anzhela from '../../assets/anzhela.jpg'
import './about.css';
import MasterCard from './MasterCard';
const About = () => {
    const [couchList, setCouchList] = useState([
        {
            name: 'Наталья',
            service: 'Косметолог',
            image: natasha
        },
        {
            name: 'Татьяна',
            service: 'Парикмахер',
            image: tanya
        },
        {
            name: 'Анжела',
            service: 'Маникюр',
            image: anzhela
        },
        {
            name: 'Валентина',
            service: 'Массажист',
            image: valya
        }
    ])

    return (
        <div className='about_wrapper'>
            <div className='about_page_first_section'>
                <div className='about_page_content'>
                    <div className='about_page_header'>
                        <h1 className='about_header_title'>Кто мы такие</h1>
                        <hr/>
                    </div>
                    <div className='about_page_text_box'>
                        <p className='about_content_text'>Добро пожаловать в наш салон красоты! Мы — команда опытных и талантливых специалистов, преданная идеалу вашей красоты и уюта.</p>
                        <p className='about_content_main_text'>Мы - профессиональная бригада стилистов, мастеров маникюра и педикюра, визажистов и парикмахеров, объединенных общим стремлением 
                        создавать неповторимый образ для каждого нашего гостя.</p>
                        <p className='about_content_main_text'>
                        Выбирая наш салон, вы выбираете заботу о своем внешнем облике и приятное времяпрепровождение в уютной атмосфере. Мы гордимся тем, что 
                        каждый наш клиент уходит от нас уверенным в своей красоте и довольным результатом!
                        </p>
                    </div>
                </div>
                <div className='about_page_image_box'>
                    <img src={pic1} alt='pic' className='about_first_img about_img'/>
                    <img src={pic2} alt='pic' className='about_second_img about_img'/>
                </div>
            </div>
           <div className='about_page_masters_section'>
                <div>
                    <h2>Наши профессионалы</h2>
                    <hr/>
                </div>
                
                <div className='about_page_couch_list'>
                    {couchList.map(item => 
                            <MasterCard couchList={item}/>
                    )}
                </div>
           </div>
        </div>
    );
};

export default About;