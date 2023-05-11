import logo from "../../assets/footer/logo.svg"
import facebook from "../../assets/footer/facebook.svg"
import instagram from "../../assets/footer/instagram.svg"
import youtube from "../../assets/footer/youtube.svg"

import "./Footer.scss";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__logo">
                        <a href="#">
                            <img src={logo} alt="Loft House"/>
                        </a>
                    </div>


                        <div className="footer__nav">
                            <nav>
                                <ul className="footer__nav-list">
                                    <li><a href="#!">About</a></li>
                                    <li><a href="#!">Region</a></li>
                                    <li><a href="#!">Catalogue</a></li>
                                    <li><a href="#!">Contacts</a></li>
                                    <li><a href="#!">Payments</a></li>
                                </ul>
                            </nav>
                        </div>


                        <div className="footer__nav">
                            <nav>
                                <ul className="footer__nav-list">
                                    <li><a href="#!">Settlement and relocation</a></li>
                                    <li><a href="#!">Service</a></li>
                                    <li><a href="#!">Environmental Sustainability</a></li>
                                    <li><a href="#!">Investment Banking</a></li>
                                    <li><a href="#!">Loyalty Program</a></li>
                                </ul>
                            </nav>
                        </div>


                    <div className="footer__address">
                                <ul className="footer__nav-list">
                                    <li>Address:<a href="#!"> Dublin 17/81b</a></li>
                                    <li>Phone:<a href="#!"> 085 138 727</a></li>
                                    <li><a href="#!"></a>Sales Department: 10:00 - 20:00</li>
                                    <li>E-mail: <a className="link-bold" href="mailto:lofthouse@.gmail.com" type="">lofthouse@.gmail.com</a> </li>
                                </ul>

                                <ul className="footer__socials">
                                    <li><a href="#!"><img src={facebook} alt=""/></a></li>
                                    <li><a href="#!"><img src={instagram} alt=""/></a></li>
                                    <li><a href="#!"><img src={youtube} alt=""/></a></li>
                                </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;