import React from 'react'
import Hero from '../componentes/Hero'
import ItemListContainer from '../componentes/ItemListContainer'

const Home = () => {
    return (
        <main>
            <Hero title="El Rey de la Cerveza" />
            <ItemListContainer />  
        </main>
    )
}

export default Home
