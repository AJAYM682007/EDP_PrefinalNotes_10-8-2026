import { NavLink } from "react-router-dom";


function Nav() {
    return(
        <nav>
            <div>
                <NavLink to="/home">My Projects</NavLink>
                <div>
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/calculator">Calculator</NavLink></li>
                        <li><NavLink to="/">Logout</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;