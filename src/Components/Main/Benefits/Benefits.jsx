import Item from "./Item/Item";
const Benefits = (props) => {
    return (
        <section className="benefits">
            <div className="container container--sm">
                <div className="benefits__row">
                        {
                           props.items.map(item => <Item img={item.img} description={item.description}/>)
                        }
                </div>

            </div>

        </section>
    )

}
export default Benefits;