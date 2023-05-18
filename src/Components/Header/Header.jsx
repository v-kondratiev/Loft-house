import "./Header.scss";
import map from "../../assets/header/map.svg";
import phone from "../../assets/header/phone.svg";

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
                                        props.linksToProps.map(el => <li><a href={el.href} key={el.id}>{el.name}</a></li>)
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