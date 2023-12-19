import  { useEffect } from 'react';
import LogoAPCF from '../img/LogoCompleto.png';
import { Link } from 'react-router-dom';
import botella from "../img/botella.png";

const Index = () => {
  const phoneNumber = '+56964115359'; // N° de la empresa
    const message = 'Hola, estoy interesado en pedir un bidon a domicilio.';

    const handleWhatsappClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.L1, .L2');
      elements.forEach((element) => {
        if (isElementInViewport(element)) {
          setTimeout(() => {
            element.classNameList.add('visible');
          }, 200); // Ajusta el tiempo de retraso según sea necesario
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
    <div className="App">

      <nav className="App-nav">
        <url className="nav-links">
          <a className="Logo" href="#"><img src={LogoAPCF} alt="LogoAPCF" /></a>

          <a className="btn" href="#s-productos"><button className="bi bi-bag-fill"> Productos</button></a>
          <a className="btn" href="#s-quienes-somos"><button className="bi bi-info-square-fill"> ¿Quiénes somos?</button></a>
          <a className="btn" href="#s-reserva"><button className="bi bi-telephone-fill"> Contactos</button></a>

          <Link className="btn" to={"/Login"}><button className="bi bi-person-fill" /></Link>
        </url>
      </nav>

      <header className="App-header">

        <div className='header-container'>

          <h1 className="Titulo">Hidratación pura a tu hogar</h1>
          <h2 className="Subtitulo">Refresca tu día con la pureza de &quot;Agua Purificada Cristalina&quot;.</h2>
          <Link className="btn" to={"/Catalogo"}><button className="bi-bag-fill"> Ver Productos</button></Link>

        </div>

      </header>

      <body className="App-body">
      
        <div className="eslogan">
         
            <div className="eslogan-container">        
            
              <div className='txt-superior'>&quot;<span className="resaltado-sup">Refresca</span> tu mundo</div>
              <div className='txt-inferior'>bebe <span className="resaltado-inf">calidad</span>&quot;</div>
              
            </div>
         
        </div>

        <div className="productos" id='s-productos'>
          <div className='margen'/>
            <div className="contenido-productos">        
              
              <div className='txt-productos'>

                <div className='txt'>Elige tu forma</div>
                <div className='txt'>de hidratarte.</div>

              </div>

              <div className='btn-carrusel'><button>boton</button></div>

              <div className='btn-catalogo'>
              <Link className="boton" to={"/Catalogo"}><button className="bi-bag-fill"> Ver Productos</button></Link>
              </div>
              <div className='carrusel'>productos de todo tipo</div>
              
              
            </div>
          <div className='margen'/>
        </div>





        <div className="quienes-somos" id='s-quienes-somos'>

          <div className='block-left'>

            <div className='info-container'>

            <div className='txt-container'>
              <div className='txt-titulo'>Calidad asegurada.</div>
              <div className='txt'>Nuestras instalaciones cuentan con la capacidad de filtrar hasta 10 galones de agua purificada por medio de la purificación por osmosis inversa.</div>
            </div>

            </div>

          </div>
          
          <div className='botella'>
            <img src={botella} width="60%" height="auto"/>
          </div>
        

          <div className='block-right'>

            <div className='img-container'>
              <img  width="950" height="525"/>
            </div>
            
          </div>

        </div>


        <div className="reserva" id='s-reserva'>

          <div className='img-repartidor'/>

          <div className='info-reserva'>

            <div className='txt-container'>
              <div className='txt'>Frescura</div>
              <div className='txt'>directo a tu hogar.</div>
              <div className='txt-info'>Reserva ya por nuestro WhatsApp para coordinar la entrega de tu producto a domicilio.</div>
              
              <div className='btn-whs' >
                <a className="boton" ><button className="bi bi-whatsapp" onClick={handleWhatsappClick}> Reserva ya</button></a>
              </div>
            </div>
     
          </div>

        </div>
      </body>

      <footer className="App-footer">
        <section className="top">
          <ul>
            <li>
              <h3 className='txt'>Contactos</h3>
              <a className='txt'>55-2829645</a>
              <a className='txt'> asodacristalina@gmail.com</a>
              <a className='txt'>+56 9 8445 9308</a>
            </li>
          </ul>
          <br />
          <ul>
            <li>
              <h3 className='txt'>Contactos Flamenco</h3>
              <a  className='txt '>55-2829645</a>
              <a className='txt'>flamencocrg@gmail.com</a>
              <a className='txt'>+56 9 9150 7245</a>
            </li>
          </ul>
        </section>
        <section className="bottom"> © 2023 Agua Purificada Cristalina y Flamenco</section>
      </footer>
    </div>
  );
};

export default Index;
