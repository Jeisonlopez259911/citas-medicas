import { NavLink } from 'react-router-dom';
import { ImHome } from "react-icons/im";
import './styles.css';

const NavMenu = () => {

    return (

        <>
            <header className="navbar bg-body-tertiary">
                <div className='container'>
                    <NavLink className="navbar-brand" href="#" to="/">
                        <ImHome />
                    </NavLink>
                    <NavLink className="navbar-brand" to="/tablaCitas">
                        Tabla Citas
                    </NavLink>
                    <NavLink className="navbar-brand" to="/tablaConsultorio">
                        Tabla Consultorio
                    </NavLink>
                </div>
            </header>
        </>


    );
};

export default NavMenu;