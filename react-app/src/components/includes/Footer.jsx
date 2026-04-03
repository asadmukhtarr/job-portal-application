import "../css/footer.css";

const Footer = () => {
    return (
        <footer className="footer-section">

            <div className="container">
                <div className="row">

                    {/* About */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5 className="footer-title">About Us</h5>
                        <p>
                            We are a modern job portal helping job seekers find the best
                            opportunities and companies discover the right talent.
                            Search thousands of jobs and apply easily.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="footer-title">Quick Links</h5>
                        <ul className="footer-links">
                            <li><a href="/"><i className="fa fa-angle-right"></i> Home</a></li>
                            <li><a href="/about"><i className="fa fa-angle-right"></i> About</a></li>
                            <li><a href="/jobs"><i className="fa fa-angle-right"></i> Jobs</a></li>
                            <li><a href="/contact"><i className="fa fa-angle-right"></i> Contact</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="footer-title">Job Categories</h5>
                        <ul className="footer-links">
                            <li><a href="#"><i className="fa fa-angle-right"></i> IT & Software</a></li>
                            <li><a href="#"><i className="fa fa-angle-right"></i> Marketing</a></li>
                            <li><a href="#"><i className="fa fa-angle-right"></i> Finance</a></li>
                            <li><a href="#"><i className="fa fa-angle-right"></i> Education</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="footer-title">Contact Us</h5>

                        <p><i className="fa fa-map-marker"></i> Lahore, Pakistan</p>
                        <p><i className="fa fa-envelope"></i> info@jobportal.com</p>
                        <p><i className="fa fa-phone"></i> +92 300 1234567</p>

                        <div className="social-icons">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                        </div>

                    </div>

                </div>
            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Job Portal. All Rights Reserved.</p>
            </div>

        </footer>
    );
};

export default Footer;