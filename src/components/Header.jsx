import { NavLink, Link } from "react-router-dom";


import logo from './../assets/images/capylogo.svg';


export default function Header() {
    let activeClass = 'active';

    return (
        <div className='container'>
            <header>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt='capybara logo' />
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/"
                                className={({ isActive }) =>
                                isActive ? activeClass : undefined
                                }>
                                    Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about"
                                className={({ isActive }) =>
                                isActive ? activeClass : undefined
                                }>
                                    About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects"
                                className={({ isActive }) =>
                                isActive ? activeClass : undefined
                                }>
                                    Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact"
                                className={({ isActive }) =>
                                isActive ? activeClass : undefined
                                }>
                                    Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                {/* <button className="menu-toggle">
                    <span className="sr-only">Toggle Navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button> */}
            </header>
        </div>
        
        
    )

}