import { Link, NavLink } from 'react-router-dom';
import './header.scss'

const Header = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">User</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
        </ul>
    )
}

export default Header;