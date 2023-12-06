import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './components/AppRoutes';
import Header from './components/header/Header';

import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
