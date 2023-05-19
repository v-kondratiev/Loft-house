import Card from "./Card/Card";
import "./Apartments.scss"
import {useState} from "react";
const Apartments = (props) => {
    const [visible, setVisible] = useState(4);

    function viewMore () {setVisible(prev=>prev + 2);
    };

    return (
        <section className="apartments" id="apart">
            <div className="container">
                <div className="apartments__title" data-aos="fade-right">
                    <h2 className="title-2">Apartments</h2>
                </div>
                <div className="apartments__cards" >
                    {
                        props.cards.slice(0, visible).map(card=> <Card img={card.img} title={card.title}/>)
                    }
                </div>

                <div className="apartments__btn" data-aos="zoom-in">
                    <button className="apartments__btn-btn" onClick={viewMore}>View more</button>
                </div>


            </div>
        </section>
    )
}

export default Apartments;