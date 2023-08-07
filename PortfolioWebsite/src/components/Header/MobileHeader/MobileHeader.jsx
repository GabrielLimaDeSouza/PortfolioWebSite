import React, { useState, useEffect, useRef } from 'react';
import styles from './MobileHeader.module.css';
import { AiOutlineMenu } from 'react-icons/ai';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

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
      <div ref={menuRef} className={styles['mobile-menu-container']}>
        <AiOutlineMenu className={`${styles['burger-icon']} ${isMenuOpen ? styles['open'] : ''}`} onClick={toggleMenu} />
        {isMenuOpen && (
          <ul className={styles['menu-items']}>
            <li onClick={(e) => handleLinkClick(e, "#1")}>
              <a href="#hero">Home</a>
            </li>
            <li onClick={(e) => handleLinkClick(e, "#3")}>
              <a href="#projects">Projetos</a>
            </li>
            <li onClick={(e) => handleLinkClick(e, "#2")}>
              <a href="#aboutMe">Sobre mim</a>
            </li>
            <li onClick={(e) => handleLinkClick(e, "#4")}>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default MobileMenu;
