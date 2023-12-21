import "./footer.css";
import logo from '../../../Index/img/LogoCompleto.png';

const footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">


                    <div className="footer-section logo-section">
                        <img src={logo} width="180px" height="auto" className="logo-img txt-footer" />
                    </div>


                    <div className="footer-section contact-section">
                        <h3 className="txt-footer">Contacto</h3>
                        <p className="txt-footer"><i className="fas fa-phone"></i> &nbsp; +55-2829645</p>
                        <p className="txt-footer"><i className="fas fa-phone"></i> &nbsp; +56 9 9150 7245</p>
                        <p className="txt-footer"><i className="fas fa-phone"></i> &nbsp; +56 9 8445 9308</p>
                    </div>

                    <div className="footer-section contact-section">
                        <h3 className="txt-footer">Correo electrónico</h3>
                        <p className="txt-footer"><i className="fas fa-envelope"></i>asodacristalina@gmail.com</p>
                        <p className="txt-footer"><i className="fas fa-envelope"></i>flamencocrg@gmail.com</p>
                    </div>


                    <div className="footer-section">
                        <div className="links-section">
                            <h3 className="txt-footer">Enlaces</h3>
                            <ul className="txt-footer">
                                <li><a className="bi-bag-fill" href="#s-productos">&nbsp;Catálogo</a></li>
                                <li><a className="bi-info-square-fill" href="#s-quienes-somos">&nbsp;¿Quiénes somos?</a></li>
                                <li><a className="fa-solid fa-truck"><a href="#s-reparto">&nbsp;Reparto</a></a></li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
            <div className="footer-bottom txt-footer">
                &copy; 2023 | Agua Purificada Cristalina y Flamenco |
            </div>
        </footer>


    )
}
export default footer