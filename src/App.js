import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './components/AppRoutes';
import Header from './components/header/Header';

import Main from './components/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <AppRoutes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
