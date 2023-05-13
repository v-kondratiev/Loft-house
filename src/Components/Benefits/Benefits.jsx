import Item from "./Item/Item";
import "./Benefits.scss"
const Benefits = (props) => {
    return (
        <section className="benefits">
            <div className="container container--sm">
                <div className="benefits__row" data-aos="fade-up"
                     data-aos-anchor-placement="center-bottom">
                        {
                           props.items.map(item => <Item img={item.img} description={item.description}/>)
                        }
                </div>

            </div>

        </section>
    )

}
export default Benefits;