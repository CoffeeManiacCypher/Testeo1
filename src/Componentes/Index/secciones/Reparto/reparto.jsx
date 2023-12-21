import "./reparto.css";

const reparto = () => {
    // Redirije al numero de whatsapp de la empresa
    const phoneNumber = '+56964115359'; // N° de la empresa
    const message = 'Saludos, me gustaria solicitar un envio a domicilio.';
    const handleWhatsappClick = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappUrl;
    };
    return (
        <div className="reserva" id='#s-reparto'>

            <div className='img-repartidor' />

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
    )
}
export default reparto