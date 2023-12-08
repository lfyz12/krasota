import React from 'react';
import CaruselHead from './main/CaruselHead';
import AboutSection from './main/AboutSection';
import ServicesSection from './main/ServicesSection';
import BookSection from './main/BookSection';

const Main = () => {
    return (
        <div>
            <CaruselHead/>
            <AboutSection/>
            <ServicesSection className='service_page'/>
            <BookSection/>
        </div>
    );
};

export default Main;