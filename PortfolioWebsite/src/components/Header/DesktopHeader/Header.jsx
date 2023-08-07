import React from 'react'
import styles from './Header.module.css'

const Header = () => {

  function rolarComSuavidade(element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }

  var links = document.querySelectorAll("a");

  links.forEach(function(link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); 
      var destino = document.querySelector(this.getAttribute("href")); 
      rolarComSuavidade(destino); 
    });
  });

  function scrollifyTo(section) {
    $.scrollify.move(section);
  }

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    scrollifyTo(sectionId); 
    setIsMenuOpen(false); 
  };


  return (
    <header className={styles.divHeader}>
        <div className={styles.nameHeader}>
            <p>GABRIEL LIMA</p>
        </div>
        <div className={styles.linksHeader}>
            <a href="#projects" onClick={(e) => handleLinkClick(e, "#3")}>Projetos</a>
            <a href="#aboutMe" onClick={(e) => handleLinkClick(e, "#2")}>Sobre mim</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "#4")}>Contato</a>
        </div>
    </header>
  )
}

export default Header