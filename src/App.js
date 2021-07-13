import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

import Menubar from '../src/components/menubar/Menubar';

function App() {

  const icons = [ 
    {
      page: 'Categorias',
      icon: 'bx bx-category-alt'
    },
    {
      page:'Usuarios',
      icon:'bx bx-user',
    },
    {
      page:'Mensajes',
      icon:'bx bx-message',
    },
    {
      page:'Graficos',
      icon:'bx bx-pie-chart-alt-2',
    }
  ];

  const [mainClass, setMainClass] = useState(false);
  const toggleMenu = () => {
    setMainClass(!mainClass);
  }
  let iconMenu = mainClass ? 'bx-menu' : 'bx-menu-alt-right';

  return (
    <div className={mainClass ? 'main close' : 'main'}>
      <Menubar icons={icons} iconMenu={iconMenu} toggleMenu={toggleMenu}></Menubar>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
