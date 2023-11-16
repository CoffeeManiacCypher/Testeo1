import React from 'react'
import LogoAPCF from '../../LogoAPCF.png';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="App">

        <nav className="App-nav">

        <url class="nav-links">
            <a class="btn" href="#"><button>Inicio</button></a>
            <a class="btn" href="#"><button class="bi bi-bag-check"> Catálogo</button></a>
            <a class="btn" href="#"><button class="bi bi-info-square-fill"> Quienes somos</button></a>
            <Link class="btn" href="#s5" to={"/content"}><button class="bi bi-telephone-fill"> Contactos</button></Link >
            <Link class="btn" to={"/Panel"}><button class="bi bi-gear-fill"/></Link>
        </url>

        </nav>

      

      <header className="App-header">
        
        <img src={LogoAPCF} className="App-logo" alt="logo" />
        <p>
          Preparativos de la plataforma.
        </p>

        
      </header>

      <body className="App-body">

        Cuerpo de pagina
        

      </body>

      <footer id="s5" className="App-footer">
        <section class="top">

          
          <ul>
            <li>
              <h3>Contactos</h3>
              <a>55-2829645</a>
              <a>asodacristalina@gmail.com</a>
              <a>+56 9 8445 9308</a>
            </li>
          </ul>
          <br/>
          <ul>
            <li>
              <h3>Contactos Flamenco</h3>
              <a>55-2829645</a>
              <a>flamencocrg@gmail.com</a>
              <a>+56 9 9150 7245</a>
            </li>
          </ul>

        </section>
        <section class="bottom"> © 2023 Agua Purificada Cristalina y Flamenco</section>
      </footer>
    </div>
  )
}

export default Index
