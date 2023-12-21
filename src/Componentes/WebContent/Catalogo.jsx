import './Catalogo.css';

import Navbar_c from './secciones/navbar/navbar_c';
import DropdownC from './secciones/navbar/dropdown_c';
import Display from "../WebContent/secciones/Display/Display";
import Display_Cristalina from '../WebContent/secciones/display_cristalina/display_cristalina';
import Display_Flamenco from '../WebContent/secciones/display_flamenco/display_flamenco';
import Footer from "../../Componentes/Index/secciones/footer/footer";

const Catalogo = () => {

  return (
    <body>
      <main>
        <div className="Catalogo">

          <nav>
            <Navbar_c />
            <DropdownC />
          </nav>

          <section className='c-header'>
            <Display />
          </section>

          <section className='s-cristalina' id='#s-cristalina'>
            <Display_Cristalina />
          </section>

          <section className='s-flamenco' id='#s-flamenco'>
            <Display_Flamenco />
          </section>

          <section >
            <Footer />
          </section>

        </div>
      </main>
    </body>

  )
}

export default Catalogo