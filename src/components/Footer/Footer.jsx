import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* About */}
                <div className="footer-column">

                    <h3>Lokpal Of India</h3>

                    <p>
                        Lokpal of India<br />
                        6, Vasant Kunj Institutional Area<br />
                        New Delhi - 110070
                    </p>

                    <p>
                        Phone: 011-26134640
                    </p>

                </div>


                {/* Quick Links */}
                <div className="footer-column">

                    <h3>Quick Links</h3>

                    <Link to="/">Home</Link>

                    <Link to="/about">
                        About Us
                    </Link>

                    <Link to="/efiling">
                        e-Filing
                    </Link>

                    <Link to="/complaint/lodge">
                        Complaint Corner
                    </Link>

                    {/* Orders intentionally not linked */}
                    <span>Orders</span>

                </div>


                {/* Useful Links */}
                <div className="footer-column">

                    <h3>Useful Links</h3>

                    {/* Not implemented yet */}
                    <span>Acts & Rules</span>

                    <span>RTI</span>

                    <span>
                        Circulars / Notifications
                    </span>

                    <span>
                        Contact Us
                    </span>

                    <a href="#top">
                        Accessibility
                    </a>

                </div>

            </div>


            {/* Bottom */}

            <div className="footer-bottom">

                <p>
                    © 2026 Lokpal of India. All Rights Reserved.
                </p>

                <p>
                    Last Updated: 07 October 2026
                </p>

            </div>

        </footer>
    );
}

export default Footer;