import React, { useEffect } from 'react'

// Páginas
import Hero from './Hero/Hero'
import AboutMe from './AboutMe/AboutMe'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const Home = () => {

  useEffect(() => {
        $.scrollify({
          section: ".section",
          sectionName: false,
          setHeights: false,
          scrollSpeed: 1100,
          scrollbars: false,
          easing: "easeOutExpo",
          before: function(index, sections) {},
          after: function(index, sections) {}
        });
  }, [])

  return (
    <>
      <div id="hero" className='section'>
        <Hero />
      </div>
      <div id="aboutMe" className='section'>
        <AboutMe />
      </div>
      <div id="projects" className='section'>
        <Projects />
      </div>
      <div id="contact" className='section'>
        <Contact />
      </div>
      <div id="footer" className='section'>
        <Footer />
      </div>
    </>
  )
}

export default Home