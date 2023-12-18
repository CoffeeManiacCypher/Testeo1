import PropTypes from 'prop-types';
import appFirebase from '../../credenciales';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(appFirebase);

const Home = ({ correoUsuario }) => {
  return (
    <div>
      <h2 className='Texto-center'>Bienvenido usuario {correoUsuario}
        <button className='btn btn-primary' onClick={() => signOut(auth)}> Logout </button>
      </h2>
    </div>
  );
};

Home.propTypes = {
  correoUsuario: PropTypes.string.isRequired,
};

export default Home;