import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Header from './components/header/Header';
import CaruselHead from './components/main/CaruselHead';
import AboutSection from './components/main/AboutSection';
import ServicesSection from './components/main/ServicesSection';
import BookSection from './components/main/BookSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <CaruselHead/>
      <AboutSection/>
      <ServicesSection/>
      <BookSection/>
    </div>
  );
}

export default App;
