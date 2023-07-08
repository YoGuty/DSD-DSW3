import './Navbar.css'
import { Outlet, Link } from "react-router-dom"

function Navbar() {
    
    const click = () => {
        const ul_navbar = document.getElementById('ul_navbar')
        ul_navbar.classList.toggle('active');
    }

    return (
        <>
            <nav className="navbar-dobetter">
                <div className="logo">
                    <div className='img-contenedor'>
                        <img src='../src/img/logo.png'></img>
                    </div>
                    <p> Tu exito, tu estudio </p>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/"> Inicio </Link>
                        </li>
                        <li>
                            <Link to="./Metodos"> Métodos de estudio </Link>
                        </li>
                        <li>
                            <p onClick={click}> Carreras </p>
                            <ul id="ul_navbar" className='uwu'>
                                <li><Link to="./Medicina"> Medicina </Link></li>
                                <li><Link to="./Contabilidad"> Contabilidad </Link></li>
                                <li><Link to="./Abogacia"> Abogacia </Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navbar