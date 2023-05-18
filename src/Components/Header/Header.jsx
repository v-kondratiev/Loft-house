import "./Header.scss";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    console.log(props)
    return (
        <header>
            <div className="header__top">
                <div className="container">
                    <div className="header__top-row">
                        <a href="#" data-aos="fade-down">
                            <img src={props.logoToProps} alt="Loft House"/>
                        </a>
                        <div className="header__nav">
                            <nav className="nav">
                                <ul className="nav__list" data-aos="fade-down">
                                    {
                                        props.linksToProps.map(el => <li><NavLink to={`${el.route}`} key={el.id}>{el.name}</NavLink></li>)
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>




        </header>)
}

export default Header;