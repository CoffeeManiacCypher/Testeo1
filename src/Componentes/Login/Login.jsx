import React, {useState} from 'react'
import "./Login.css";

export function Login({setUser}) {

    const [Correo, setCorreo] = useState("")
    const [Contraseña, setContraseña] = useState("")
    const [Error, setError] = useState(false)

    const handleSubmit = (e) =>{
        if(Correo === "" || Contraseña === "") {
            setError(true)
            return
        }
        setError(false)
        
        setUser([Correo])
    }

    return(
        <section>
            <h1>Formulario</h1>

           <form className="Formulario" onSubmit={handleSubmit} > 
                <input type="text" onChange={e =>setCorreo(e.target.value)} /> <br/><br/>
                <input type="password"value={Contraseña} onChange={e =>setContraseña(e.target.value)}/><br/>
                <button>Iniciar sesion </button>
            </form> 
            
            {Error && <p>Todos los campos son obligatorios </p>}
        </section>
    )
}

export default Login