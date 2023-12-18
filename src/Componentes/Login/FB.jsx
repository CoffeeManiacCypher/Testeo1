import appFirebase from '../../credenciales' 
import {getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(appFirebase)

// importando nuestros componenetes 
import Login from '../src/components/Login'
import Home from '../src/components/Home'

function FB() {
  // los usuarios logeados se estaran almacenando en la variable de estado usuario 
  const [usuario, setUsuario] = useState (null)
  onAuthStateChanged(auth, (usuarioFirebase)=> {
    if (usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })
  return (
      <div>
        {usuario ? <Home correoUsuario = {usuario.email}/> : <Login/>}
      </div>
  )
}

export default FB