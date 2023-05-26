import logo from "../assets/logo.webp";
import "../style/Header.css";
import { NavLink, Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/"><img src={logo} className="logo" alt="logo de kasa"/></Link>
            <nav className="navbar">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "nav-active nav-link" : "nav-link"
                    }
                    end="/"
                    to="/"
                >
                    Accueil
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "nav-active nav-link" : "nav-link"
                    }
                    end="about"
                    to="/about"
                >
                    {" "}
                    A Propos
                </NavLink>
            </nav>
        </div>
    );
}

export default Header;