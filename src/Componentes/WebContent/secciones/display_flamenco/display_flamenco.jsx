import "./display_flamenco.css";
import botella from '../../img_productos/botella.png';


const display_flamenco = () => {
    const phoneNumber = '+56991507245'; // N° de la empresa
    const message = 'Hola, estoy interesado en pedir un bidon a domicilio.';

    const handleWhatsappClick = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappUrl;
    };

    return (
        <div className='s-flamenco' id='s-flamenco'>
            <div className='flamenco-container'>

                <div className='display-producto'>
                    <img className='producto' src={botella} width="20%" height="auto" />
                    <h1 className='nombre'>Botella de agua purificada sin gas de 500 cc.</h1>
                    <p className='cantidad'>1 unidad.</p>
                    <h2 className='precio'>$ 850 CLP</h2>
                    <a className='boton'><button className='' onClick={handleWhatsappClick}>Ver más</button> </a>
                </div>
            </div>
        </div>
    )
}
export default display_flamenco