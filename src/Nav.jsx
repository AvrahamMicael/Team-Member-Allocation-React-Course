import { Link } from 'react-router-dom';

const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to='/groups'>Groups</Link>
            </li>
        </ul>
    </nav>
);

export default Nav;
