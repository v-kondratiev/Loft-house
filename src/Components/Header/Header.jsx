import "./Header.scss";
// import logo from "../../assets/header/logo.svg";
import mouse from "../../assets/header/mouse.svg";
import map from "../../assets/header/map.svg";
import phone from "../../assets/header/phone.svg";

const Header = (props) => {
    console.log(props)
    return (
        <header>
            <div className="header__top">
                <div className="container">
                    <div className="header__top-row">
                        <a href="#">
                            <img src={props.logoToProps} alt="Loft House"/>
                        </a>
                        <div className="header__nav">
                            <nav className="nav">
                                <ul className="nav__list">
                                    {
                                        props.linksToProps.map(el => <li><a href="#!" key={el.id}>{el.name}</a></li>)
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <h1 className="header__title">
                    Loft apartments <br/>
                    in the historic center
                </h1>
            </div>

            <a className="header__title-icon" href="#benefits">
                <img src={mouse} alt=""/>
            </a>

            <div className="header__footer">
                <div className="container">
                    <div className="info">

                        <a href="#section-map">
                            <img src={map} alt=""/>
                            Dublin 17/81b
                        </a>
                        <a href="#!">
                            <img src={phone} alt=""/>
                            085 138 727</a>
                    </div>
                </div>
            </div>
        </header>)
}

export default Header;