import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate
import fondo_login_2 from '../../assets/fondo_login_2.png';
import usuario from '../../assets/usuario.png';
import appFirebase from '../../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './inicio.css';

const auth = getAuth(appFirebase)

const Login = () => {
    const [registrando, setRegistrando] = useState(false)
    const navigate = useNavigate();  // Inicializa useNavigate

    const functionAutenticacion = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth, correo, contraseña);
                
                navigate('/PControl');
            } catch (error) {
                alert("Asegura que la contraseña tenga más de 8 caracteres")
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña);
                
                navigate('/PControl');
            } catch (error) {
                alert("El correo y/o contraseña son incorrectas")
            }
        }
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card">
                            <div className="card card-body shadow-lg">
                                <img src={usuario} alt='' className='estilo-usuario' />
                                <form onSubmit={functionAutenticacion}>
                                    <input type="text" placeholder='Ingresar Email' className='cajatexto' id='email' />
                                    <input type="password" placeholder='Ingresar Contraseña' className='cajatexto' id='password'/>
                                    
                                    <button className='btnform'>
                                        {registrando ? "Registrate" : "Iniciar Sesion"}
                                    </button>
                                
                                </form>
                                <h4 className='texto'>{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}<button className='btnswitch' onClick={() => setRegistrando(!registrando)}>{registrando ? "Inicia Sesion" : "Registrate"}</button></h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <img src={fondo_login_2} alt="" className='tamaño-imagen' />
                </div>

            </div>
        </div>
    )
}
export default Login;
