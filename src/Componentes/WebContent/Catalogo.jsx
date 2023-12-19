import { Link } from 'react-router-dom';
import LogoAPCF from '../img/LogoCompleto.png';
import dispensador from './img_productos/dispensador.png';
import bidon from './img_productos/bidon.png';
import bidon2 from './img_productos/bidon10lts.png';
import botella from './img_productos/botella.png';
import './Catalogo.css';

const Catalogo = () => {
  const phoneNumber = '+56964115359'; // N° de la empresa
    const message = 'Hola, estoy interesado en pedir un bidon a domicilio.';

    const handleWhatsappClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };
  
  return (
    <div className="Catalogo">

        <nav className="App-nav">
        <url className="nav-links">
          <Link className="Logo" to={"/"}><img src={LogoAPCF} alt="LogoAPCF" /></Link>

          <a className="btn" href="#s-cristalina"><button className="bi-bag-fill"> Productos Cristalina</button></a>
          <a className="btn" href="#s-flamenco"><button className="bi-bag-fill"> Productos Flamenco</button></a>
          <a className="btn" href="#s-reserva"><button className="bi bi-telephone-fill"> Reservar</button></a>
        </url>
      </nav>

      <header className='c-header'>
          <div className='header-container'>

            <a href='#s-cristalina'>
              <button className='card-cristalina' >
                <h1 className='txt1'>Productos</h1>
                <h1 className='txt2'>Cristalina</h1>
              </button>
            </a>

            <a href='#s-flamenco'>
              <button className='card-flamenco'>
                <h1 className='txt1'>Productos</h1>
                <h1 className='txt2'>Flamenco</h1>
              </button> 
            </a>
            
  
          </div>
      </header>

      <body className='c-body'>

        <div className='s-cristalina' id='s-cristalina'>
            <div className='cristalina-container'>

              <div className='display-producto'>
                <img className='producto' src={bidon} width="20%" height="auto"/>
                <h1 className='nombre'>Bidon de agua purificada de 20 litros.</h1>
                <p className='cantidad'>1 unidad.</p>
                <h2 className='precio'>$ 7.600 CLP</h2>
                <a className='boton'><button className='' onClick={handleWhatsappClick}>Ver más</button> </a>
              </div>

              <div className='display-producto'>
                <img className='producto' src={bidon2} width="20%" height="auto"/>
                <h1 className='nombre'>Bidon de agua purificada de 10 litros.</h1>
                <p className='cantidad'>1 unidad.</p>
                <h2 className='precio'>$ 3.800 CLP</h2>
                <a className='boton'><button className='' onClick={handleWhatsappClick}>Ver más</button> </a>
              </div>

              <div className='display-producto'>
                <img className='producto' src={dispensador} width="20%" height="auto"/>
                <h1 className='nombre'>Dispensador de agua manual básico.</h1>
                <p className='cantidad'>1 unidad.</p>
                <h2 className='precio'>$ 5.500 CLP</h2>
                <a className='boton'><button className='' onClick={handleWhatsappClick}>Ver más</button> </a>
              </div>
             

            </div>
        </div>

        <div className='s-flamenco' id='s-flamenco'>
            <div className='flamenco-container'>

              <div className='display-producto'>
                  <img className='producto' src={botella} width="20%" height="auto"/>
                  <h1 className='nombre'>Botella de agua purificada sin gas de 500 cc.</h1>
                  <p className='cantidad'>1 unidad.</p>
                  <h2 className='precio'>$ 850 CLP</h2>
                  <a className='boton'><button className='' onClick={handleWhatsappClick}>Ver más</button> </a>
                </div>

                <div className='display-producto'>
                  <img className='producto' src={bidon2} width="20%" height="auto"/>
                  <h1 className='nombre'>Bidon de agua purificada de 10 litros.</h1>
                  <p className='cantidad'>1 unidad.</p>
                  <h2 className='precio'>$ 3.800 CLP</h2>
                  <a className='boton'><button className='' onClick={handleWhatsappClick}>Ver más</button> </a>
                </div>

                <div className='display-producto'>
                  <img className='producto' src={dispensador} width="20%" height="auto"/>
                  <h1 className='nombre'>Dispensador de agua manual básico.</h1>
                  <p className='cantidad'>1 unidad.</p>
                  <h2 className='precio'>$ 5.500 CLP</h2>
                  <a className='boton'><button className='' onClick={handleWhatsappClick}>Ver más</button> </a>
                </div> 
                
              </div>
        </div>

      </body>

  
    </div>
    
  )
}

export default Catalogo