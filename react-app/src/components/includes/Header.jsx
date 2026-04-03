import "../css/header.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar shadow-lg border-top border-success border-3">
            <div className="container">

                {/* Logo */}
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={logo} alt="Logo" className="logo-img" />
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Content */}
                <div className="collapse navbar-collapse" id="navbarContent">

                    {/* Search */}
                    <div className="flex-grow-1 d-flex justify-content-center my-3 my-lg-0">
                        <form className="search-form">
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Search for jobs, keywords..."
                                />
                                <button className="btn search-btn" type="submit">
                                    <i className="fa fa-search me-1"></i> Search
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Menu */}
                    <ul className="navbar-nav ms-auto text-center text-lg-start">

                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                <i className="fa fa-home me-1"></i> Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                <i className="fa fa-info-circle me-1"></i> About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/jobs">
                                <i className="fa fa-briefcase me-1"></i> Available Jobs
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                <i className="fa fa-envelope me-1"></i> Contact
                            </Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;