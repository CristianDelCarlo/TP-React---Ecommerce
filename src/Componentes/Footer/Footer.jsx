import Equipo from "../Equipo/Equipo";
import styles from './Footer.module.css';

function Footer() {
    return (
       <footer>
            
            <h2><img src="/favicon.png" width="30" height="25"></img> Ecommerce - Ventas online <img src="/favicon.png" width="30" height="25"></img></h2>
            <Equipo Mensaje="Nuestro Equipo de Trabajo" />
        </footer>
    );
}
export default Footer;
