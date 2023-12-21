import "./display_cristalina.css";
import dispensador from '../../img_productos/dispensador.png';
import bidon from '../../img_productos/bidon.png';
import bidon2 from '../../img_productos/bidon10lts.png';

const display_cristalina = () => {
    const phoneNumber = '+56991507245'; // N° de la empresa
    const message = 'Hola, estoy interesado en pedir un bidon a domicilio.';

    const handleWhatsappClick = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappUrl;
    };
    
    return (
        <div className='s-cristalina' id='s-cristalina'>
            <div className='cristalina-container'>

                <div className='display-producto'>
                    <img className='producto' src={bidon} width="20%" height="auto" />
                    <h1 className='nombre'>Bidon de agua purificada de 20 litros.</h1>
                    <p className='cantidad'>1 unidad.</p>
                    <h2 className='precio'>$ 7.600 CLP</h2>
                    <a className='boton'><button className='' onClick={handleWhatsappClick}>Ver más</button> </a>
                </div>

                <div className='display-producto'>
                    <img className='producto' src={bidon2} width="20%" height="auto" />
                    <h1 className='nombre'>Bidon de agua purificada de 10 litros.</h1>
                    <p className='cantidad'>1 unidad.</p>
                    <h2 className='precio'>$ 3.800 CLP</h2>
                    <a className='boton'><button className='' onClick={handleWhatsappClick}>Ver más</button> </a>
                </div>

                <div className='display-producto'>
                    <img className='producto' src={dispensador} width="20%" height="auto" />
                    <h1 className='nombre'>Dispensador de agua manual básico.</h1>
                    <p className='cantidad'>1 unidad.</p>
                    <h2 className='precio'>$ 5.500 CLP</h2>
                    <a className='boton'><button className='' onClick={handleWhatsappClick}>Ver más</button> </a>
                </div>


            </div>
        </div>
    )
}
export default display_cristalina