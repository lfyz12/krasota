import React, { useState } from 'react';
import hairPic from '../../assets/hair.jpg'
import makeup from '../../assets/makeup.jpg'
import manicure from '../../assets/manicure.jpg'
import skin from '../../assets/skincare.jpg'
import body from '../../assets/body.jpg'
import massage from '../../assets/massage.jpg'
import Button from 'react-bootstrap/Button';
import CardService from './CardService';
import './service.css'
const ServicesSection = ({...props}) => {
    const [imagesList, setImagesList] = useState([
        {
        image: hairPic,
        name: 'Стрижка и укладка',
        discription: 'Улучшите свой внешний вид с помощью наших профессиональных услуг по стрижке и укладке волос.'
        },
        {
            image: makeup,
            name: 'Макияж',
            discription: 'Наши специалисты по макияжу помогут вам выглядеть наилучшим образом менее чем за 30 минут.'
        },
        {
            image: manicure,
            name: 'Маникюр',
            discription: 'Побалуйте себя нашими услугами по маникюру и педикюру, которые принесут сенсационные результаты.'
        },
        {
            image: skin,
            name: 'Уход за кожей',
            discription: 'Мы предлагаем полный спектр расслабляющих услуг по уходу за кожей, включая все виды процедур по уходу за лицом.'
        },
        {
            image: body,
            name: 'Уход за телом',
            discription: 'Восстановите свое тело с помощью наших бодрящих процедур для тела, которые помогут вам лучше расслабиться.'
        },
        {
            image: massage,
            name: 'Массаж',
            discription: 'Наши услуги массажа помогут вам избавиться от любых негативных эмоций после долгого напряженного дня.'
        }
    ])
    return (
        <div {...props}>
            <div className='service_title mt-3'>
                Наши услуги
                <hr className='sep_line'/>
            </div>
            <div className='service_text mt-3 text-center'>
            Побалуйте себя одной из наших фирменных услуг. Наши любимые специалисты по красоте поразят ваши брови, придадут вам сияние и многое другое. 
            <br/>Вы будете выглядеть и чувствовать себя лучше, чем когда-либо прежде.
            </div>
            <div className='mt-4 mb-4 card_section'>
                <div className='d-flex ms-auto me-auto justify-conetnt-center align-items-center w-50 flex-wrap card_box'>
                {imagesList.map(item => 
                    <CardService item={item}/>
                )}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;

//<a href="https://www.flaticon.com/ru/free-icons/-" title="щетка для волос иконки">Щетка для волос иконки от Freepik - Flaticon</a>
//<a href="https://www.flaticon.com/ru/free-icons/" title="составить иконки">Составить иконки от Vitaly Gorbachev - Flaticon</a>
//<a href="https://www.flaticon.com/ru/free-icons/" title="маникюр иконки">Маникюр иконки от kerismaker - Flaticon</a>
//<div> Автор иконок: <a href="https://www.flaticon.com/ru/authors/victoruler" title="Victoruler"> Victoruler </a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com'</a></div>
//<div> Автор иконок: <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com'</a></div>
//<div> Автор иконок: <a href="https://www.flaticon.com/ru/authors/kosonicon" title="kosonicon"> kosonicon </a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com'</a></div>