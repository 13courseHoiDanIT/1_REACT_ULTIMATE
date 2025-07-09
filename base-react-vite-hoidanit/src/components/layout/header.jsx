import './header.scss'

const Header = () => {
    return (
        <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="/users">User</a></li>
            <li><a href="/product">Product</a></li>
        </ul>
    )
}

export default Header;