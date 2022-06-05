import React from 'react';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/Navbar/Navbar';
import Hero from './componentes/Hero';
import ItemDetailContainer from './componentes/ItemDetailContainer';

import './Style.css';


export default function App() {
  return (
    <>
      <NavBar />
      <Hero title="El Maestro de la Cerveza" />
      <ItemListContainer />

      <ItemDetailContainer id={3} />
    </>
  );
}
