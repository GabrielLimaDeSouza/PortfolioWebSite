import React from 'react'

// Estilos
import heroStyles from './Hero.module.css'

// Componentes
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="body black-body">
        <Header />
        <div className={heroStyles.divContent}>
            <div>
                <h1 className={heroStyles.primaryText}>Desenvolvedor Full Stack</h1>
            </div>
            <div>
                <p className={heroStyles.secondaryText}>I love design products and experiences with users in mind.</p>
            </div>
            <div>
                <Button text="MEUS PROJETOS"/>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home