import React from 'react'
import { useRef, useEffect } from 'react'

// Media Query
import {useMediaQuery} from 'react-responsive';

// Estilos
import heroStyles from './Hero.module.css'

// Componentes
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/DesktopHeader/Header'
import MobileHeader from '../../../components/Header/MobileHeader/MobileHeader'

const Hero = () => {

    const secondaryTextRef = useRef(null);

    const isDesktop  = useMediaQuery({minWidth: 1000});

    useEffect(() => {
        const contactTexts = ['Oi, meu nome é Gabriel Lima de Souza!', 'Eu sou estudante de Engenharia de Software.', 'E sou um desenvolvedor Full Stack.', 'Esse é meu site portfólio.'];
        let removing = false;
        let idx = 0;
        let char = 0;
    
        const typingEffect = () => {
          const typedText = secondaryTextRef.current;
    
          if (typedText) {
            if (char < contactTexts[idx].length) {
              typedText.textContent += contactTexts[idx][char];
            }
    
            if (char === contactTexts[idx].length + 15) {
              removing = true;
            }
    
            if (removing) {
              typedText.textContent = typedText.textContent.slice(0, -1);
            }
    
            char++;
    
            if (typedText.textContent.length === 0) {
              if (idx === contactTexts.length - 1) {
                idx = 0;
              } else {
                idx++;
              }
    
              char = 0;
              removing = false;
            }
          }
        };
    
        const typingInterval = setInterval(typingEffect, 100);
    
        return () => {
          clearInterval(typingInterval);
        };
      }, []);
    
    function shuffleArray(array) {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

  return (
    <div className="body black-body">
        {isDesktop ?
        <Header />
        :
        <MobileHeader />}
        <div className={heroStyles.divContent}>
            <div>
                <h1 className={heroStyles.primaryText}>Desenvolvedor Full Stack</h1>
            </div>
            <div>
                <p className={heroStyles.secondaryText} ref={secondaryTextRef}></p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Hero