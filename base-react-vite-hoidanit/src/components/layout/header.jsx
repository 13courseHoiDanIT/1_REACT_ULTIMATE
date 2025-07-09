import { Link } from 'react-router-dom';
import './header.scss'

const Header = () => {
    return (
        <ul>
            <li><Link class="active" to="#home">Home</Link></li>
            <li><Link to="/users">User</Link></li>
            <li><Link to="/product">Product</Link></li>
        </ul>
    )
}

export default Header;