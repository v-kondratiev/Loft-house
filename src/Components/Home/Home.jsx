import map from "../../assets/header/map.svg";
import phone from "../../assets/header/phone.svg";
import "./Home.scss"
const Home = () => {
    return (
        <section className="home">

            <div className="container">
                <h1 className="header__title" data-aos="zoom-in">
                    Loft apartments <br/>
                    in the historic center
                </h1>
            </div>


            <div className="header__footer">
                <div className="container">
                    <div className="info" data-aos="fade-up">

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


        </section>


    )

}

export default Home;