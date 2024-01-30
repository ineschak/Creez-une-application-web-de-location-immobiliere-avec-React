import { Link } from 'react-router-dom'
import '../../styles/Header.css'
 import logo from '../../assets/logo.png'
function Header() {
    return (
        <nav class='nav'>
            <img src={logo} alt='Kasa' />
            <Link to="/Accueil">Accueil</Link>
            <Link to="/A Propos">A Propos</Link>
        </nav>
    )
}

export default Header