import Card from "./Card/Card";
import "./Apartments.scss"
const Apartments = (props) => {
    return (
        <section className="apartments" id="apart">
            <div className="container">

                <div className="apartments__title">
                    <h2 className="title-2">Apartments</h2>
                </div>

                <div className="apartments__cards" >
                    {
                        props.cards.map(card=> <Card img={card.img} title={card.title}/>)
                    }
                </div>

            </div>
        </section>
    )
}

export default Apartments;