import { useEffect } from 'react';

import NavBar from "./secciones/Navbar/Navbar";
import DropDown from "./secciones/Navbar/dropdown";
import Hero from "./secciones/Hero/hero";
import Slogan from "./secciones/Slogan/Slogan";
import Pre_display from "./secciones/Pre_Display/pre_display";
import Reparto from "./secciones/Reparto/reparto";
import Footer from "./secciones/footer/footer";

const Index = () => {
  // Efecto de abrir/cerrar el DropDown
  useEffect(() => {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    if (toggleBtn && toggleBtnIcon && dropDownMenu) {
      toggleBtn.onclick = function () {
        const isOpen = dropDownMenu.classList.toggle('open');

        toggleBtnIcon.className = isOpen
          ? 'fa-solid fa-xmark'
          : 'fa-solid fa-bars';
      };
    }
  }, []);

  // Animación de inicio
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.L1, .L2');
      elements.forEach((element) => {
        if (isElementInViewport(element)) {
          setTimeout(() => {
            element.classNameList.add('visible');
          }, 200);
        }
      });
    };

    const isElementInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <body>
      <main>

        <nav>
          <NavBar />
          <DropDown />
        </nav>

        <section className='hero_section' id='#'>
          <Hero />
        </section>

        <section className='slogan-section' >
          <Slogan />
        </section>

        <section className='s-productos' id='#s-productos'>
            <Pre_display />
        </section>

        <section className='#s-reparto' id='#s-reparto'>
          <Reparto />
        </section>

        <footer>
          <Footer />
        </footer>

      </main>
    </body>
  );
};

export default Index;
