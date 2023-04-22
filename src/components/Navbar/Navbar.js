import "./Navbar.css";
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <Link className="navbar-logo" to={"/"}>ArgTrekking</Link>
                <Link className="seeCarrito" to={"/cart"}>🛒</Link>
            </nav>
        </div>
    );
};

export default Navbar;
