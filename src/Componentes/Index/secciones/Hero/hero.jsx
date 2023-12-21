import "./hero.css";
import { Link } from 'react-router-dom';

const hero = () => {
    return (
        <div className='hero'>
            <div className='hero_layer layer1'/>
            <div className='hero_layer layer2'/>
            <div className='hero_layer layer3'/>
            <div className='hero-container'>
                <h1 className="Titulo">Hidratación pura a tu hogar</h1>
                <h2 className="Subtitulo">Refresca tu día con la pureza de &quot;Agua Purificada Cristalina&quot;.</h2>
                <Link className="btn" to={"/Catalogo"}><button>Ver Productos&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-angles-right"></i></button></Link>
            </div>
        </div>
    )
}
export default hero