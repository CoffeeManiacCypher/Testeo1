import "./pre_display.css";
import { Link } from 'react-router-dom';

const pre_display = () => {
    return (
        <div className="productos" id='s-productos'>
            <div className='margen' />

            <div className="contenido-productos">
                <div className='txt-productos '>

                    <div className='txt'>Hidratate con </div>
                    <div className='txt'>pureza cristalina</div>

                </div>

                <div className='btn-catalogo'>
                    <Link className="boton" to={"/Catalogo"}><button className="bi-bag-fill"> Ver Productos</button></Link>
                </div>


            </div>
            <div className='margen' />
        </div>
    )
}
export default pre_display