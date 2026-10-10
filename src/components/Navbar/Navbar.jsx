import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import orgStructure from "../../assets/orgstructure.pdf";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [ordersOpen, setOrdersOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
        setAboutOpen(false);
        setOrdersOpen(false);
    };

    return (
        <div className="navbar-container">

            {/* =========================
                HAMBURGER BUTTON
            ========================= */}

            <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>


            {/* =========================
                NAVBAR
            ========================= */}

            <nav className={`navbar ${menuOpen ? "show" : ""}`}>

                {/* HOME */}

                <Link
                    to="/"
                    onClick={closeMenu}
                >
                    Home
                </Link>


                {/* =========================
                    ABOUT US DROPDOWN
                ========================= */}

                <div className="nav-dropdown">

                    <div className="about-menu">

                        <Link
                            to="/about/introduction"
                            onClick={closeMenu}
                        >
                            About Us
                        </Link>

                        <button
                            className="dropdown-arrow"
                            onClick={() => setAboutOpen(!aboutOpen)}
                        >
                            {aboutOpen ? "⌃" : "⌄"}
                        </button>

                    </div>


                    {aboutOpen && (

                        <div className="dropdown-menu">

                            {/* Introduction */}

                            <Link
                                to="/about/introduction"
                                onClick={closeMenu}
                            >
                                Introduction
                            </Link>


                            {/* Jurisdiction */}

                            <Link
                                to="/about/jurisdiction"
                                onClick={closeMenu}
                            >
                                Jurisdiction and Functions of Lokpal
                            </Link>


                            {/* Organizational Structure PDF */}

                            <a
                                href={orgStructure}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                            >
                                Organizational Structure
                            </a>

                        </div>

                    )}

                </div>


                {/* =========================
                    E-FILING
                ========================= */}

                            <Link
                                to="/efiling"
                                className="efiling-highlight"
                                 onClick={closeMenu}
                                                >
                                    e-Filing
</Link>

                {/* =========================
                    COMPLAINT CENTER
                ========================= */}

                <Link
                    to="/complaint/lodge"
                    onClick={closeMenu}
                >
                    Complaint Center
                </Link>


                {/* =========================
                    ORDERS DROPDOWN
                ========================= */}

                <div className="nav-dropdown">

                    <div className="about-menu">

                        <Link
                            to="/orders"
                            onClick={closeMenu}
                        >
                            Orders
                        </Link>

                        <button
                            className="dropdown-arrow"
                            onClick={() => setOrdersOpen(!ordersOpen)}
                        >
                            {ordersOpen ? "⌃" : "⌄"}
                        </button>

                    </div>


                    {ordersOpen && (

                        <div className="dropdown-menu">

                            {/* Notable Orders */}

                            <Link
                                to="/orders/notable"
                                onClick={closeMenu}
                            >
                                Notable Orders
                            </Link>


                            {/* Final Orders */}

                            <Link
                                to="/orders/final"
                                onClick={closeMenu}
                            >
                                Final Orders
                            </Link>


                            {/* Conditional Orders */}

                            <Link
                                to="/orders/conditional"
                                onClick={closeMenu}
                            >
                                Conditional Orders
                            </Link>


                            {/* Other Orders */}

                            <Link
                                to="/orders/other"
                                onClick={closeMenu}
                            >
                                Other Orders (Directed by Court/Bench)
                            </Link>

                        </div>

                    )}

                </div>


                {/* =========================
                    ACTS & RULES
                ========================= */}

                <Link
                    to="/acts-rules"
                    onClick={closeMenu}
                >
                    Acts & Rules
                </Link>


                {/* =========================
                    RTI
                ========================= */}

                <Link
                    to="/rti"
                    onClick={closeMenu}
                >
                    RTI
                </Link>


                {/* =========================
                    CIRCULARS / NOTIFICATIONS
                ========================= */}

                <Link
                    to="/notifications"
                    onClick={closeMenu}
                >
                    Circulars / Notifications
                </Link>


                {/* =========================
                    CONTACT US
                ========================= */}

                <Link
                    to="/contact"
                    onClick={closeMenu}
                >
                    Contact Us
                </Link>

            </nav>

        </div>
    );
}

export default Navbar;