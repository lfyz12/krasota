import React, {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstPict from '../../assets/pic-1.jpg'
import secondPict from '../../assets/pic-2.jpg'
import thirdPict from '../../assets/pic-3.jpg'
import Nav from 'react-bootstrap/Nav'

import './carusel.css'

const CaruselHead = () => {
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
        <Nav className='carousel-wrapper'>
            <Carousel className='carousel-content'>
                <Carousel.Item>
                    <img
                        className='d-block img'
                        src={firstPict}
                        alt='firstPicture'
                    />
                    <div className='carusel_item_text'>
                    <div className='carusel_item_title'>
                       Салон красоты <span className='main_word'>Solari</span>  
                       <br/>
                       Красота в подарок
                    </div>
                       <p className='carusel_item_discription mt-3'>
                       Салон красоты Solari предлагает новейшие и высококачественные услуги для вас и всех членов вашей семьи. 
                       Мы специализируемся на всех косметических процедурах, и наша команда полностью профессиональна и инновационна, от макияжа до укладки волос.
                       </p>
                       <button className='carusel_item_btn mt-3'>
                        Записаться
                    </button>
                    </div>
        
                </Carousel.Item>
                <Carousel.Item>

                    <img
                        className='d-block  img'
                        src={secondPict}
                        alt='firstPicture'
                    />
                    <div className='carusel_item_text'>
                    <div className='carusel_item_title'>
                        <span className='main_word'>Испытайте</span> лучшее 
                        <br/>
                        Косметические услуги
                    </div> 
                       
                       <p className='carusel_item_discription mt-3'>
                       Мы предлагаем полный спектр парикмахерских услуг для мужчин и женщин, уход за бровями и ресницами, услуги визажистов и стилистов. 
                       Доверьте свою красоту профессионалам, которым действительно небезразличен ваш стиль и внешний вид!
                       </p>
                       <button className='carusel_item_btn mt-3'>
                        Записаться
                    </button>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block img'
                        src={thirdPict}
                        alt='firstPicture'
                    />
                    <div className='carusel_item_text'>
                    <div className='carusel_item_title'>
                     Профессиональная <span className='main_word'>красота</span>
                     <br/>
                      Забота обо всех
                    </div>
                   
                       
                       <p className='carusel_item_discription mt-3'>
                       Процедуры в нашем салоне красоты помогут вам расслабиться после долгого и напряженного дня. 
                       В Solari вы можете побаловать себя и воспользоваться преимуществами профессионального косметического ухода по доступной цене.
                        Наслаждайтесь своей жизнью благодаря нашим высококачественным косметическим услугам.
                       </p>
                       <button className='carusel_item_btn mt-3'>
                        Записаться
                    </button>
                    </div>
     
                </Carousel.Item>

            </Carousel>

        </Nav>
    );
};

export default CaruselHead;