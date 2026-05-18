import { Link } from 'react-router-dom';
import styles from './Header.module.css'

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/destacados">Destacados</Link></li>
                    <li><Link to="/alta">Alta de Productos</Link></li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;